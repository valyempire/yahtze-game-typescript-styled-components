import { styled } from "@mui/system";

export const Container = styled("div")(() => ({
  transition: "all 0.2s",
  "&:hover": {
    cursor: "pointer",
    background: "#131863",
    color: "white",
  },
}));

export const RuleRowDisabled = styled(Container)(() => ({
  background:
    "linear-gradient(to right, rgba(209, 196, 233, 1) 0%, rgba(209, 196, 233, 1) 0%, rgba(209, 196, 233, 1) 30%, rgba(227, 242, 253, 1) 40%)",
  backgroundSize: "300% 300%",
  animation: "Slide 1s ease 1",
  "& td:first-child": {
    textDecoration: "line-through",
  },
  "&:hover": {
    cursor: "not-allowed",
  },
}));

export const SlideAnimation = styled("div")(() => ({
  "@keyframes Slide": {
    "0%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 51%",
    },
  },
}));

export const RuleRowTd = styled("td")(() => ({
  padding: "0.3em",
  borderBottom: "solid 1px black",
}));

export const RuleRowName = styled(RuleRowTd)(() => ({
  width: "50%",
  textAlign: "left",
}));

export const RuleRowScore = styled(RuleRowTd)(() => ({
  width: "50%",
  textAlign: "right",
}));
