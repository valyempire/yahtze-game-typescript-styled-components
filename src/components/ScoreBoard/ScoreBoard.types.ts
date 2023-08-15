/**
 * Defines the ScoreBoard Row interface
 */
export interface ScoreBoardRow {
  label: string;
  value?: number;
  disabled?: boolean;
  scoreText: string;
  onClick: () => void;
}

/**
 * Defines the component props interface
 */
export interface ScoreBoardProps {
  title: string;
  rows: ScoreBoardRow[];
}

/**
 * Defines the row props interface
 */
export interface RowProps {
  disabled?: boolean;
}
