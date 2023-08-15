/**
 * Imports types
 */
import { Dice } from "../../hooks/useGame";

/**
 * Defines the component props interface
 */
export interface DieProps {
  die: Dice;
  rolling?: boolean;
  onClick: () => void;
}

/**
 * Defines the Die Icon props interface
 */
export interface DieIconProps {
  locked?: boolean;
  rolling?: boolean;
}
