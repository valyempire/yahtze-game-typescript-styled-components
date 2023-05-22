import React from "react";
import { RuleRowProps } from "./RuleRow.types";
import {
  Container,
  RuleRowDisabled,
  RuleRowName,
  RuleRowScore,
} from "./RuleRow.styles";

export const RuleRow: React.FC<RuleRowProps> = (props) => {
  const { score, name, doScore, description } = props;

  const disabled = score !== undefined;

  if (disabled) {
    return (
      <RuleRowDisabled>
        <RuleRowName>{name}</RuleRowName>
        <RuleRowScore>{score || description}</RuleRowScore>
      </RuleRowDisabled>
    );
  }

  return (
    <Container onClick={doScore}>
      <RuleRowName>{name}</RuleRowName>
      <RuleRowScore>{score || description}</RuleRowScore>
    </Container>
  );
};
