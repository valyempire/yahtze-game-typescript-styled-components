/**
 * Provides utility functions
 */
export const useUtils = () => {
  /**
   * Returns the score keys for the total of a given value
   */
  const getTotalOneScoresKey = (value: number) => {
    switch (value) {
      case 1:
        return "ones";
      case 2:
        return "twos";
      case 3:
        return "threes";
      case 4:
        return "fours";
      case 5:
        return "fives";
      case 6:
        return "sixes";
      default:
        return "ones";
    }
  };

  /**
   * Returns the score keys for sum distro
   */
  const getSumDistroScoresKey = (value: number) => {
    switch (value) {
      case 3:
        return "threeOfAKind";
      case 4:
        return "fourOfAKind";
      default:
        return "chance";
    }
  };

  /**
   * Checks if the dice is a small straight
   */
  const isSmallStraight = (dice: Set<number | undefined>) => {
    /**
     * Straight can be 234 + either 1 or 5
     */
    if (
      dice.has(2) &&
      dice.has(3) &&
      dice.has(4) &&
      (dice.has(1) || dice.has(5))
    ) {
      return true;
    }

    /**
     * or 345 + either 2 or 6
     */
    if (
      dice.has(3) &&
      dice.has(4) &&
      dice.has(5) &&
      (dice.has(2) || dice.has(6))
    ) {
      return true;
    }

    return false;
  };

  /**
   * Checks if the dice is a large straight
   */
  const isLargeStraight = (dice: Set<number | undefined>) => {
    /**
     * Straight can be 2345 + either 1 or 6
     */
    if (
      dice.has(2) &&
      dice.has(3) &&
      dice.has(4) &&
      dice.has(5) &&
      (dice.has(1) || dice.has(6))
    ) {
      return true;
    }

    return false;
  };

  return {
    getTotalOneScoresKey,
    getSumDistroScoresKey,
    isSmallStraight,
    isLargeStraight,
  };
};
