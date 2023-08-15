/**
 * Import styled
 */
import { styled, keyframes } from "@mui/system";

/**
 * Imports types
 */
import { DieIconProps } from "./Die.types";

/**
 * Defines the keyframes for the spin animation
 */
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

/**
 * Styles the DieIcon
 */
export const DieIcon = styled("div", {
  shouldForwardProp: (propName) =>
    propName !== "locked" && propName !== "rolling",
})<DieIconProps>((props) => {
  const { locked, rolling } = props;

  return {
    transition: "all 0.3s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 70,
    height: 70,
    cursor: "pointer",
    ...(rolling && {
      animation: `${spin} 1s ease-out`,
    }),
    ...(locked && {
      cursor: "not-allowed",
      opacity: 0.8,
      boxShadow: "none",
    }),
    "& svg": {
      color: "#fff",
      width: "40px !important",
      height: 45,
    },
  };
});
