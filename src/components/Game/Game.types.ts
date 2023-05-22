export interface Scores {
  [key: string]: number | undefined;
  ones?: number;
  twos?: number;
  threes?: number;
  fours?: number;
  fives?: number;
  sixes?: number;
  threeOfKind?: number;
  fourOfKind?: number;
  fullHouse?: number;
  smallStraight?: number;
  largeStraight?: number;
  yahtzee?: number;
  chance?: number;
}
