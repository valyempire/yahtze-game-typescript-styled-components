/**
 * Import styled
 */
import { styled, keyframes } from "@mui/system";

/**
 * Imports types
 */
import { RowProps } from "./ScoreBoard.types";

/**
 * Defines the keyframes for the gradient animation
 */
const slide = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
`;

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "20px 30px",
    paddingBottom: 0
  };
});

/**
 * Styles the Title
 */
export const Title = styled("h2")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    textAlign: "center",
    fontSize: "1.8em",
    fontWeight: 300,
    borderBottom: "2px solid purple",
    margin: 0,
    marginBottom: 10
  };
});

/**
 * Styles the RowsContainer
 */
export const RowsContainer = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%"
  };
});

/**
 * Styles the Row
 */
export const Row = styled("div")<RowProps>((props) => {
  const { disabled } = props;

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    borderBottom: "1px solid #ccc",
    padding: 4,
    cursor: disabled ? "unset" : "pointer",
    ...(disabled && {
      background:
        "linear-gradient(to right,rgba(209, 196, 233, 1) 0%,rgba(209, 196, 233, 1) 0%,rgba(209, 196, 233, 1) 30%,rgba(227, 242, 253, 1) 40%);",
      backgroundSize: "300% 300%",
      animation: `${slide} 1s ease 1`,
      "& .ScoreBoard-rowLabel": {
        textDecoration: "line-through"
      }
    })
  };
});

/**
 * Styles the Label
 */
export const Label = styled("div")(() => {
  return {
    display: "flex",
    flex: 1,
    fontSize: 13,
    fontWeight: 300
  };
});

/**
 * Styles the ScoreText
 */
export const ScoreText = styled("div")(() => {
  return {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    fontSize: 13,
    fontWeight: 300
  };
});
