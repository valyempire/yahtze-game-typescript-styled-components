import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const DiceContainer = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});
