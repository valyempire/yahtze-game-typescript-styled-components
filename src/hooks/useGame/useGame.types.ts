/**
 * Defines the dice interface
 */
export interface Dice {
  value?: number;
  locked: boolean;
}

/**
 * Defines the scores interface
 */
export interface Scores {
  ones?: number;
  twos?: number;
  threes?: number;
  fours?: number;
  fives?: number;
  sixes?: number;
  threeOfAKind?: number;
  fourOfAKind?: number;
  fullHouse?: number;
  smallStraight?: number;
  largeStraight?: number;
  yahtzee?: number;
  chance?: number;
}
