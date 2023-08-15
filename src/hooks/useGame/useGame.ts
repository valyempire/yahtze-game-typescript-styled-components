import { useState, useEffect } from "react";

/**
 * Imports constants
 */
import { NUM_DICE } from "../../constants";

/**
 * Imports hooks
 */
import { useUtils } from "..";

/**
 * Imports types
 */
import { Dice, Scores } from "./useGame.types";
import { ScoreBoardRow } from "../../components/ScoreBoard";

/**
 * Helper function that returns the default value for the dice
 */
const getDiceDefaultValue = () => {
  return Array.from({ length: NUM_DICE }).map((d) => ({
    value: d as undefined,
    locked: false,
  }));
};

/**
 * Provides the logic for the game
 */
export const useGame = () => {
  /**
   * Initializes the dice state
   */
  const [dice, setDice] = useState<Dice[]>(getDiceDefaultValue());

  /**
   * Initializes the rolling state
   */
  const [rolling, setRolling] = useState(false);

  /**
   * Initializes the starting round flag
   */
  const [startingRound, setStartingRound] = useState(true);

  /**
   * Initializes the rolls left state
   */
  const [rollsLeft, setRollsLeft] = useState(2);

  /**
   * Initializes the scores state
   */
  const [scores, setScores] = useState<Scores>({});

  /**
   * Gets utils
   */
  const {
    isSmallStraight,
    isLargeStraight,
    getTotalOneScoresKey,
    getSumDistroScoresKey,
  } = useUtils();

  /**
   * Randomizes the dice
   */
  const randomizeDice = (dice: Dice[]) => {
    return dice.map((dice) => {
      if (dice.locked) return dice;
      return {
        locked: false,
        value: Math.ceil(Math.random() * 6),
      };
    });
  };

  /**
   * Initializes the dice
   */
  const initializeDice = () => {
    setRolling(true);

    setTimeout(() => {
      setDice((prevState) => randomizeDice(prevState));
      setRolling(false);
      setStartingRound(false);
    }, 1000);
  };

  /**
   * Handles the roll click event
   */
  const rollDice = () => {
    setRolling(true);

    setTimeout(() => {
      setDice((prevState) => randomizeDice(prevState));
      setRolling(false);
      setRollsLeft((prevState) => prevState - 1);
    }, 1000);
  };

  /**
   * Checks if the roll button should be disabled
   */
  const isRollDisabled = () => {
    return startingRound || rollsLeft === 0;
  };

  /**
   * Handles rendering the roll button text
   */
  const getRollButtonText = () => {
    if (startingRound) return "Starting round";
    return `${rollsLeft} Roll${rollsLeft > 1 ? "s" : ""} Left`;
  };

  /**
   * Handles the lock/unlock dice event
   */
  const toggleLockDice = (index: number) => {
    setDice((prevState) => {
      const dice = [...prevState];
      dice[index].locked = !dice[index].locked;
      return dice;
    });
  };

  /**
   * Returns the sum of the dice
   */
  const sumOfDice = (dice: Dice[]) => {
    return dice.reduce((acc, curr) => {
      if (curr.value) {
        return acc + curr.value;
      }
      return acc;
    }, 0);
  };

  /**
   * Returns the frequency of the dice
   */
  const frequencyOfDice = (dice: Dice[]) => {
    const frequency = new Map();
    for (const die of dice) {
      frequency.set(die.value, (frequency.get(die.value) || 0) + 1);
    }

    return Array.from(frequency.values());
  };

  /**
   * Returns the count of the dice
   */
  const countDice = (dice: Dice[], value: number) => {
    return dice.filter((die) => die.value === value).length;
  };

  /**
   * Handles calculating the total score
   */
  const calculateTotalScore = () => {
    let totalScore = 0;

    for (const key in scores) {
      const score = scores[key as keyof typeof scores];
      if (typeof score === "number") totalScore += score;
    }

    return totalScore;
  };

  /**
   * Handles updating the score
   */
  const updateScore = (score: number, key: keyof Scores) => {
    setScores((prevState) => ({
      ...prevState,
      [key]: score,
    }));

    setDice((prevState) => prevState.map((die) => ({ ...die, locked: false })));
    setRolling(true);

    setTimeout(() => {
      setDice((prevState) => randomizeDice(prevState));
      setRolling(false);
      setRollsLeft(2);
    }, 1000);
  };

  /**
   * Given a sought-for val, return sum of dice of that val.
   * Used for rules like "sum of all ones"
   */
  const getTotalOneNumber = (dice: Dice[], value: number) => {
    const result = countDice(dice, value) * value;
    const key = getTotalOneScoresKey(value);

    updateScore(result, key);
  };

  /**
   *  Given a required # of same dice, return sum of all dice.
   *  Used for rules like "sum of all dice when there is a 3-of-kind"
   */
  const sumDistro = (dice: Dice[], value: number) => {
    const freq = frequencyOfDice(dice);
    const result = freq.some((c) => c >= value) ? sumOfDice(dice) : 0;
    const key = getSumDistroScoresKey(value);

    updateScore(result, key);
  };

  /**
   * Returns the full house score
   */
  const getFullHouseScore = (dice: Dice[]) => {
    const freq = frequencyOfDice(dice);
    const result = freq.includes(2) && freq.includes(3) ? 25 : 0;

    updateScore(result, "fullHouse");
  };

  /**
   * Returns the small straight score
   */
  const getSmallStraightScore = (dice: Dice[]) => {
    const d = new Set(dice.map((die) => die.value));
    const result = isSmallStraight(d) ? 30 : 0;

    updateScore(result, "smallStraight");
  };

  /**
   * Returns the large straight score
   */
  const getLargeStraightScore = (dice: Dice[]) => {
    const d = new Set(dice.map((die) => die.value));
    const result = isLargeStraight(d) ? 40 : 0;

    updateScore(result, "largeStraight");
  };

  /**
   * Returns the yahtzee score
   */
  const getYahtzeeScore = (dice: Dice[]) => {
    const freq = frequencyOfDice(dice);
    const result = freq[0] === 5 ? 50 : 0;

    updateScore(result, "yahtzee");
  };

  /**
   * Handles building the score board rows data structure for the upper section
   */
  const buildUpperScoreBoardRows = () => {
    return [
      {
        label: "Ones",
        scoreText: "1 point per 1",
        value: scores.ones,
        disabled: scores.ones !== undefined,
        onClick: () => getTotalOneNumber(dice, 1),
      },
      {
        label: "Twos",
        scoreText: "2 points per 2",
        value: scores.twos,
        disabled: scores.twos !== undefined,
        onClick: () => getTotalOneNumber(dice, 2),
      },
      {
        label: "Threes",
        scoreText: "3 points per 3",
        value: scores.threes,
        disabled: scores.threes !== undefined,
        onClick: () => getTotalOneNumber(dice, 3),
      },
      {
        label: "Fours",
        scoreText: "4 points per 4",
        value: scores.fours,
        disabled: scores.fours !== undefined,
        onClick: () => getTotalOneNumber(dice, 4),
      },
      {
        label: "Fives",
        scoreText: "5 points per 5",
        value: scores.fives,
        disabled: scores.fives !== undefined,
        onClick: () => getTotalOneNumber(dice, 5),
      },
      {
        label: "Sixes",
        scoreText: "6 points per 6",
        value: scores.sixes,
        disabled: scores.sixes !== undefined,
        onClick: () => getTotalOneNumber(dice, 6),
      },
    ] as ScoreBoardRow[];
  };

  /**
   * Handles building the score board rows data structure for the lower section
   */
  const buildLowerScoreBoardRows = () => {
    return [
      {
        label: "Three of Kind",
        value: scores.threeOfAKind,
        disabled: scores.threeOfAKind !== undefined,
        scoreText: "Sum of all dice if 3 are the same",
        onClick: () => sumDistro(dice, 3),
      },
      {
        label: "Four of Kind",
        scoreText: "Sum of all dice if 4 are the same",
        value: scores.fourOfAKind,
        disabled: scores.fourOfAKind !== undefined,
        onClick: () => sumDistro(dice, 4),
      },
      {
        label: "Full House",
        scoreText: "25 points for a full house",
        value: scores.fullHouse,
        disabled: scores.fullHouse !== undefined,
        onClick: () => getFullHouseScore(dice),
      },
      {
        label: "Small Straight",
        scoreText: "30 points for a small straight",
        value: scores.smallStraight,
        disabled: scores.smallStraight !== undefined,
        onClick: () => getSmallStraightScore(dice),
      },
      {
        label: "Large Straight",
        scoreText: "40 points for a large straight",
        value: scores.largeStraight,
        disabled: scores.largeStraight !== undefined,
        onClick: () => getLargeStraightScore(dice),
      },
      {
        label: "Yahtzee",
        scoreText: "50 points for yahtzee",
        value: scores.yahtzee,
        disabled: scores.yahtzee !== undefined,
        onClick: () => getYahtzeeScore(dice),
      },
      {
        label: "Chance",
        scoreText: "Sum of all dice",
        value: scores.chance,
        disabled: scores.chance !== undefined,
        onClick: () => sumDistro(dice, 0),
      },
    ] as ScoreBoardRow[];
  };

  /**
   * Handles initializing the dice
   */
  useEffect(() => {
    initializeDice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Locks the dice when the rolls are over
   */
  useEffect(() => {
    if (rollsLeft === 0) {
      setDice((prevState) =>
        prevState.map((dice) => ({ ...dice, locked: true }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rollsLeft]);

  return {
    dice,
    rolling,
    rollDice,
    toggleLockDice,
    isRollDisabled,
    getRollButtonText,
    calculateTotalScore,
    buildUpperScoreBoardRows,
    buildLowerScoreBoardRows,
  };
};
