import React from "react";
import { Die } from "../Die/Die";
import { DiceProps } from "./Dice.types";
import { DiceContainer } from "./Dice.styles";

export const Dice: React.FC<DiceProps> = (props) => {
  const { dice, handleClick, locked, disabled, rolling } = props;

  return (
    <DiceContainer className="Dice">
      {dice.map((d, idx) => (
        <Die
          handleClick={handleClick}
          val={d}
          locked={locked[idx]}
          idx={idx}
          key={idx}
          disabled={disabled}
          rolling={rolling && !locked[idx]}
        />
      ))}
    </DiceContainer>
  );
};
