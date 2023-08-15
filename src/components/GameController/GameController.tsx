/**
 * Imports Material UI components
 */
import { Grid } from "@mui/material";

/**
 * Imports styled components
 */
import {
  Title,
  TotalScore,
  CardHeader,
  RollButton,
  CardContent,
  DiceContainer,
  CardContainer,
} from "./GameController.styles";

/**
 * Imports components
 */
import { Die } from "../Die";
import { ScoreBoard } from "../ScoreBoard";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Defines the component
 */
export const GameController: React.FC = () => {
  /**
   * Gets the game state
   */
  const {
    dice,
    rolling,
    rollDice,
    toggleLockDice,
    isRollDisabled,
    getRollButtonText,
    calculateTotalScore,
    buildUpperScoreBoardRows,
    buildLowerScoreBoardRows,
  } = useGame();

  /**
   * Handles rendering the dice
   */
  const renderDice = () => {
    return dice.map((die, index) => {
      /**
       * Handles the click event
       */
      const handleClick = () => toggleLockDice(index);

      return (
        <Die key={index} die={die} rolling={rolling} onClick={handleClick} />
      );
    });
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <CardContainer className="Aici este card container">
          <CardHeader className="AICI ESTE CONTAINERUL">
            <Title>Yahtzee!</Title>
            <DiceContainer className="AICI UMBLA">{renderDice()}</DiceContainer>
            <RollButton
              className="AICI UMBLA 222222"
              onClick={rollDice}
              disabled={isRollDisabled()}
            >
              {getRollButtonText()}
            </RollButton>
          </CardHeader>
          <CardContent>
            <ScoreBoard title="Upper" rows={buildUpperScoreBoardRows()} />
            <ScoreBoard title="Lower" rows={buildLowerScoreBoardRows()} />
            <TotalScore>Total Score: {calculateTotalScore()}</TotalScore>
          </CardContent>
        </CardContainer>
      </Grid>
    </Grid>
  );
};
