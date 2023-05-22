import { styled } from "@mui/system";
import { keyframes } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonProps } from "./Die.types";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Button = styled("button", {
  shouldForwardProp: (propName) => propName !== "locked",
})<ButtonProps>(
  (props) => {
    const { locked } = props;
    return {
      color: "white",
      textShadow:
        "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      backgroundColor: "#131863",
      border: "none",
      opacity: locked ? 0.5 : 1,
      cursor: locked ? "not-allowed" : "pointer",
      "&:hover:not([disabled]):not(.Die-locked)": {
        opacity: 0.8,
      },
      "@media (max-width: 768px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width: 480px)": {
        fontSize: "1rem",
      },
      maxWidth: "100%",
      width: "100%",
      borderRadius: "0.5rem",
    };
  },
  ({ rolling }) =>
    rolling && {
      animation: `${spin} 1s ease-out`,
      cursor: "not-allowed",
      "&:hover": {
        cursor: "not-allowed",
      },
    }
);

export const DieIcon = styled(FontAwesomeIcon)(() => {
  return {
    margin: 0,
  };
});
