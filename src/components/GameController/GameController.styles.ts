/**
 * Import styled
 */
import { styled, keyframes } from "@mui/system";

/**
 * Defines the keyframes for the gradient animation
 */
const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

/**
 * Styles the Card Container
 */
export const CardContainer = styled("div")((props) => {
  const { theme } = props;

  return {
    display: "flex",
    flexDirection: "column",
    background: "#882eb3",
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      minWidth: 0,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 0,
    },
  };
});

/**
 * Styles the Card Header
 */
export const CardHeader = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(-45deg, #673ab7, #9c27b0)",
    backgroundSize: "400% 400%",
    animation: `${gradient} 15s ease infinite`,
  };
});

/**
 * Styles the Card Content
 */
export const CardContent = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    width: "100%",
    height: "100%",
  };
});

/**
 * Styles the Dice Container
 */
export const DiceContainer = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };
});

/**
 * Styles the RollButton
 */
export const RollButton = styled("button")(() => {
  return {
    fontSize: "2em",
    color: "#fff",
    fontWeight: 400,
    transition: "0.5s",
    backgroundSize: "200% auto",
    boxShadow:
      "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);",
    backgroundImage:
      "linear-gradient(to right,#91eae4 0%,#7f7fd5 51%,#91eae4 100%);",
    borderRadius: 6,
    border: "none",
    minWidth: 150,
    margin: "20px 0",
    padding: "10px 20px",
    cursor: "pointer",
    "&:hover": {
      backgroundPosition: "right center",
    },
    "&:active,:focus": {
      outline: "none",
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      backgroundColor: "#ddd",
    },
  };
});

/**
 * Styles the Title
 */
export const Title = styled("h1")(() => {
  return {
    margin: "20px 0",
    color: "#fff",
    fontSize: "5rem",
    fontFamily: "Roboto",
  };
});

/**
 * Styles the TotalScore
 */
export const TotalScore = styled("h2")(() => {
  return {
    textAlign: "center",
    fontWeight: 400,
    textTransform: "uppercase",
    borderBottom: "2px solid purple",
    width: "calc(100% - 60px)",
  };
});
