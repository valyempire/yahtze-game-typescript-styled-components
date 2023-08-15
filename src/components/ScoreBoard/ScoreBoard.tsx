/**
 * Imports types
 */
import { ScoreBoardProps } from "./ScoreBoard.types";

/**
 * Imports styled components
 */
import {
  Row,
  Title,
  Label,
  ScoreText,
  Container,
  RowsContainer,
} from "./ScoreBoard.styles";

/**
 * Defines the component
 */
export const ScoreBoard: React.FC<ScoreBoardProps> = (props) => {
  const { title, rows } = props;

  /**
   * Handles rendering the rows
   */
  const renderRows = () => {
    return rows.map((row) => {
      const { disabled, label, value, scoreText, onClick } = row;

      /**
       * Handles the click event
       */
      const handleClick = () => {
        if (!disabled) onClick();
      };

      return (
        <Row disabled={disabled} onClick={handleClick} key={label}>
          <Label className="ScoreBoard-rowLabel">{label}</Label>
          <ScoreText>{disabled ? value : scoreText}</ScoreText>
        </Row>
      );
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <RowsContainer>{renderRows()}</RowsContainer>
    </Container>
  );
};
