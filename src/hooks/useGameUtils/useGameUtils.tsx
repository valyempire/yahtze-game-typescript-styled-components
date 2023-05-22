export const useGameUtils = () => {
  const sum = (dice: number[]): number => {
    // sum of all dice
    return dice.reduce((prev, curr) => prev + curr);
  };

  const freq = (dice: number[]): number[] => {
    // frequencies of dice values
    const freqs = new Map();
    // eslint-disable-next-line prefer-const
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  };

  const count = (dice: number[], val: number): number => {
    // # times val appears in dice
    return dice.filter((d) => d === val).length;
  };

  const totalOneNumber = (val: number, description: string) => {
    const evalRoll = (dice: number[]): number => {
      return val * count(dice, val);
    };
    return { evalRoll, description };
  };

  const sumDistro = (count: number, description: string) => {
    const evalRoll = (dice: number[]): number => {
      // do any of the counts meet or exceed this distro?
      return freq(dice).some((c) => c >= count) ? sum(dice) : 0;
    };
    return { evalRoll, description };
  };

  const fullHouse = (score: number, description: string) => {
    const evalRoll = (dice: number[]): number => {
      const freqs = freq(dice);
      return freqs.includes(2) && freqs.includes(3) ? score : 0;
    };
    return { evalRoll, description };
  };

  const smallStraight = (score: number, description: string) => {
    const evalRoll = (dice: number[]): number => {
      const d = new Set(dice);
      // straight can be 234 + either 1 or 5
      if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5)))
        return score;

      // or 345 + either 2 or 6
      if (d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6)))
        return score;

      return 0;
    };
    return { evalRoll, description };
  };

  const largeStraight = (score: number, description: string) => {
    const evalRoll = (dice: number[]): number => {
      const d = new Set(dice);
      // large straight must be 5 different dice & only one can be a 1 or a 6
      return d.size === 5 && (!d.has(1) || !d.has(6)) ? score : 0;
    };
    return { evalRoll, description };
  };

  const yahtzee = (score: number, description: string) => {
    const evalRoll = (dice: number[]): number => {
      // all dice must be the same
      return freq(dice)[0] === 5 ? score : 0;
    };
    return { evalRoll, description };
  };

  const onesObj = totalOneNumber(1, "1 point per 1");
  const twosObj = totalOneNumber(2, "2 points per 2");
  const threesObj = totalOneNumber(3, "3 points per 3");
  const foursObj = totalOneNumber(4, "4 points per 4");
  const fivesObj = totalOneNumber(5, "5 points per 5");
  const sixesObj = totalOneNumber(6, "6 points per 6");

  const ones = (dice: number[]): number => {
    return onesObj.evalRoll(dice);
  };
  const twos = (dice: number[]): number => {
    return twosObj.evalRoll(dice);
  };
  const threes = (dice: number[]): number => {
    return threesObj.evalRoll(dice);
  };
  const fours = (dice: number[]): number => {
    return foursObj.evalRoll(dice);
  };
  const fives = (dice: number[]): number => {
    return fivesObj.evalRoll(dice);
  };
  const sixes = (dice: number[]): number => {
    return sixesObj.evalRoll(dice);
  };

  const threeOfAKind = (dice: number[]): number => {
    return sumDistro(3, "Sum of all dice if 3 or more are the same").evalRoll(
      dice
    );
  };
  const fourOfAKind = (dice: number[]): number => {
    return sumDistro(4, "Sum of all dice if 4 or more are the same").evalRoll(
      dice
    );
  };
  const chance = (dice: number[]): number => {
    return sumDistro(0, "Sum of all dice").evalRoll(dice);
  };

  return {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfAKind,
    fourOfAKind,
    chance,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
  };
};
