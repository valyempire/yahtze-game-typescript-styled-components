/**
 * Imports components
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports font awesome icons
 */
import {
  faDiceSix,
  faDiceOne,
  faDiceTwo,
  faDiceFour,
  faDiceFive,
  faDiceThree,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Imports styled components
 */
import { DieIcon } from "./Die.styles";

/**
 * Imports types
 */
import { DieProps } from "./Die.types";

/**
 * Defines the component
 */
export const Die: React.FC<DieProps> = (props) => {
  const { die, rolling, onClick } = props;

  /**
   * Handles rendering the die
   */
  const getDieIcon = () => {
    switch (die.value) {
      case 1:
        return faDiceOne;
      case 2:
        return faDiceTwo;
      case 3:
        return faDiceThree;
      case 4:
        return faDiceFour;
      case 5:
        return faDiceFive;
      default:
        return faDiceSix;
    }
  };

  return (
    <DieIcon
      onClick={onClick}
      locked={die.locked}
      rolling={!die.locked && rolling}
    >
      <FontAwesomeIcon icon={getDieIcon()} />
    </DieIcon>
  );
};
