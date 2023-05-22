import React, { useState, useEffect } from "react";
import { Dice } from "../Dice";
import { ScoreTable } from "../ScoreTable";
import { Scores } from "./Game.types";

import {
  GameContainer,
  Title,
  GameDiceSection,
  GameButtonWrapper,
  GameReroll,
  GameHeader,
} from "./Game.styles";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

export const Game: React.FC = () => {
  const [dice, setDice] = useState<number[]>(Array.from({ length: NUM_DICE }));
  const [locked, setLocked] = useState<boolean[]>(Array(NUM_DICE).fill(false));
  const [rollsLeft, setRollsLeft] = useState<number>(NUM_ROLLS);
  const [rolling, setRolling] = useState<boolean>(false);
  const [scores, setScores] = useState<Scores>({
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined,
  });

  const animateRoll = () => {
    setRolling(true);
    setTimeout(() => {
      roll();
    }, 1000);
  };

  const roll = () => {
    setDice((st) =>
      st.map((d, i) => (locked[i] ? d : Math.ceil(Math.random() * 6)))
    );
    setLocked((st) =>
      rollsLeft > 1 ? st : st.map((value) => (value ? true : false))
    );
    setRollsLeft((st) => st - 1);
    setRolling(false);
  };

  const toggleLocked = (idx: number) => {
    if (rollsLeft > 0 && !rolling) {
      setLocked((st) => [...st.slice(0, idx), !st[idx], ...st.slice(idx + 1)]);
    }
  };

  const doScore = (
    rulename: keyof Scores,
    ruleFn: (dice: number[]) => number
  ) => {
    setScores((st) => ({
      ...st,
      [rulename]: ruleFn(dice),
    }));
    setRollsLeft(NUM_ROLLS);
    setLocked(Array(NUM_DICE).fill(false));
    animateRoll();
  };

  const displayRollInfo = () => {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round",
    ];
    return messages[rollsLeft];
  };

  // useEffect(() => {
  //   animateRoll();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    // Only animate the roll if there are rolls left
    if (rollsLeft > 0) {
      animateRoll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GameContainer className="Game">
      <GameHeader className="Game-header">
        <Title className="App-title">Yahtzee!</Title>
        <GameDiceSection className="Game-dice-section">
          <Dice
            dice={dice}
            locked={locked}
            handleClick={toggleLocked}
            disabled={rollsLeft === 0}
            rolling={rolling}
          />
          <GameButtonWrapper className="Game-button-wrapper">
            <GameReroll
              className="Game-reroll"
              disabled={locked.every((x) => x) || rollsLeft === 0 || rolling}
              onClick={animateRoll}
            >
              {displayRollInfo()}
            </GameReroll>
          </GameButtonWrapper>
        </GameDiceSection>
      </GameHeader>
      <ScoreTable doScore={doScore} scores={scores} />
    </GameContainer>
  );
};
