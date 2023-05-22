import { styled } from "@mui/system";

export const GameContainer = styled("div")(() => {
  return {
    background: "white",
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
});

export const Title = styled("h2")(() => {
  return {
    fontWeight: 100,
    fontSize: "2em",
  };
});

export const GameDiceSection = styled("section")(() => {
  return {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
  };
});

export const GameButtonWrapper = styled("div")(() => {
  return { display: "flex", justifyContent: "center", alignItems: "center" };
});

export const GameReroll = styled("button")(() => {
  return {
    fontSize: "2em",
    color: "white",
    fontWeight: 100,
    transition: "0.5s",
    backgroundSize: "200% auto",
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
    backgroundImage:
      "linear-gradient(to right, #91eae4 0%, #7f7fd5 51%, #91eae4 100%)",
    borderRadius: "0.5rem",
    border: "none",
    width: "50%",
    marginBottom: "2rem",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "right center",
    },
    "&:active, &:focus": {
      outline: "none",
    },
    "&:disabled": {
      backgroundColor: "#ddd",
      cursor: "not-allowed",
      opacity: 0.5,
    },
  };
});

export const GameDescription = styled("p")(() => {
  return {
    fontStyle: "italic",
    color: "white",
  };
});

export const GameHeader = styled("div")(() => {
  return {
    width: "100%",
    background: "linear-gradient(-45deg, #131863, #131863)",
    backgroundSize: "400% 400%",
    animation: "$Gradient 15s ease infinite",
    "@keyframes Gradient": {
      "0%": {
        backgroundPosition: "0% 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0% 50%",
      },
    },
  };
});
