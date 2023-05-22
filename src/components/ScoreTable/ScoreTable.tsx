/* eslint-disable prefer-const */
import React from "react";
import { RuleRow } from "../RuleRow";
import { ScoreTableProps } from "./ScoreTable.types";
// import './ScoreTable.css';
import { ScoreTableContainer, ScoreTableSection } from "./ScoreTable.styles";

import { useGameUtils } from "../../hooks";

export const ScoreTable: React.FC<ScoreTableProps> = (props) => {
  const { scores, doScore } = props;

  const {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfAKind,
    fourOfAKind,
    chance,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
  } = useGameUtils();

  const getTotalScore = () => {
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        totalScore += scores[key]!;
      }
    }
    return totalScore;
  };

  // const onesDescription = "1 point per 1";
  // const twosDescription = "2 points per 2";
  // const threesDescription = "3 points per 3";
  // const foursDescription = "4 points per 4";
  // const fivesDescription = "5 points per 5";
  // const sixesDescription = "6 points per 6";

  const onesObj = {
    evalRoll: ones,
    description: "1 point per 1",
  };

  const twosObj = {
    evalRoll: twos,
    description: "2 points per 2",
  };

  const threesObj = {
    evalRoll: threes,
    description: "3 points per 3",
  };

  const foursObj = {
    evalRoll: fours,
    description: "4 points per 4",
  };

  const fivesObj = {
    evalRoll: fives,
    description: "5 points per 5",
  };

  const sixesObj = {
    evalRoll: sixes,
    description: "6 points per 6",
  };
  const threeOfAKindDescription = "Sum of all dice if 3 or more are the same";
  const fourOfAKindDescription = "Sum of all dice if 4 or more are the same";

  const chanceDescription = "sum of all dice";
  const yahtzeeObj = yahtzee(50, "50 points");
  const fullHouseObj = fullHouse(25, "25 points");
  const smallStraightObj = smallStraight(30, "30 points");
  const largeStraightObj = largeStraight(40, "40 points");
  const chanceObj = { evalRoll: chance, description: chanceDescription };

  return (
    <ScoreTableContainer>
      <ScoreTableSection>
        <h2>Upper</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Ones"
              score={scores.ones}
              description={onesObj.description}
              // description={onesDescription}
              // doScore={() => doScore("ones", ones.evalRoll)}
              doScore={() => doScore("ones", (dice) => ones(dice))}
              // ruleFn={ones.evalRoll}
              ruleFn={(dice: number[]) => ones(dice)}
            />
            <RuleRow
              name="Twos"
              score={scores.twos}
              description={twosObj.description}
              // doScore={() => doScore("twos", twos.evalRoll)}
              doScore={() => doScore("Twos", (dice) => twos(dice))}
              // ruleFn={twos.evalRoll}
              ruleFn={(dice: number[]) => twos(dice)}
            />
            <RuleRow
              name="Threes"
              score={scores.threes}
              description={threesObj.description}
              // doScore={() => doScore("threes", threes.evalRoll)}
              doScore={() => doScore("threes", (dice) => threes(dice))}
              // ruleFn={threes.evalRoll}
              ruleFn={(dice: number[]) => threes(dice)}
            />
            <RuleRow
              name="Fours"
              score={scores.fours}
              description={foursObj.description}
              // doScore={() => doScore("fours", fours.evalRoll)}
              doScore={() => doScore("fours", (dice) => fours(dice))}
              // ruleFn={fours.evalRoll}
              ruleFn={(dice: number[]) => fours(dice)}
            />
            <RuleRow
              name="Fives"
              score={scores.fives}
              description={fivesObj.description}
              // doScore={() => doScore("fives", fives.evalRoll)}
              doScore={() => doScore("fives", (dice) => fives(dice))}
              // ruleFn={fives.evalRoll}
              ruleFn={(dice: number[]) => fives(dice)}
            />
            <RuleRow
              name="Sixes"
              score={scores.sixes}
              description={sixesObj.description}
              // doScore={() => doScore("sixes", sixes.evalRoll)}
              doScore={() => doScore("sixes", (dice) => sixes(dice))}
              // ruleFn={sixes.evalRoll}
              ruleFn={(dice: number[]) => sixes(dice)}
            />
          </tbody>
        </table>
      </ScoreTableSection>
      <section className="ScoreTable-section ScoreTable-section-lower">
        <h2>Lower</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Three of Kind"
              score={scores.threeOfAKind}
              description={threeOfAKindDescription}
              // doScore={() => doScore("threeOfAKind", threeOfAKind.evalRoll)}
              doScore={() =>
                doScore("threeOfAKind", (dice) => threeOfAKind(dice))
              }
              // ruleFn={threeOfAKind.evalRoll}
              ruleFn={(dice: number[]) => threeOfAKind(dice)}
            />
            <RuleRow
              name="Four of Kind"
              score={scores.fourOfAKind}
              description={fourOfAKindDescription}
              // doScore={() => doScore("fourOfAKind", fourOfAKind.evalRoll)}
              doScore={() =>
                doScore("fourOfAKind", (dice) => fourOfAKind(dice))
              }
              // ruleFn={fourOfAKind.evalRoll}
              ruleFn={(dice: number[]) => fourOfAKind(dice)}
            />

            <RuleRow
              name="Full House"
              score={scores.fullHouse}
              // description={fullHouseDescription}
              // doScore={() => doScore("fullHouse", fullHouse.evalRoll)}
              // doScore={() => doScore("fullHouse", fullHouse().evalRoll)}
              // ruleFn={fullHouse.evalRoll}
              // ruleFn={(dice: number[]) => fullHouse().evalRoll(dice)}
              description={fullHouseObj.description}
              doScore={() => doScore("fullHouse", fullHouseObj.evalRoll)}
              ruleFn={fullHouseObj.evalRoll}
            />
            <RuleRow
              name="Small Straight"
              score={scores.smallStraight}
              description={smallStraightObj.description}
              // doScore={() => doScore("smallStraight", smallStraight.evalRoll)}
              // ruleFn={smallStraight.evalRoll}
              doScore={() =>
                doScore("smallStraight", smallStraightObj.evalRoll)
              }
              ruleFn={smallStraightObj.evalRoll}
            />
            <RuleRow
              name="Large Straight"
              score={scores.largeStraight}
              // description={largeStraightDescription}
              // doScore={() => doScore("largeStraight", largeStraight.evalRoll)}
              // ruleFn={largeStraight.evalRoll}
              description={largeStraightObj.description}
              doScore={() =>
                doScore("largeStraight", largeStraightObj.evalRoll)
              }
              ruleFn={largeStraightObj.evalRoll}
            />
            <RuleRow
              name="Yahtzee"
              score={scores.yahtzee}
              // description={yahtzeeDescription}
              // doScore={() => doScore("yahtzee", yahtzee.evalRoll)}
              // ruleFn={yahtzee.evalRoll}
              description={yahtzeeObj.description}
              doScore={() => doScore("yahtzee", yahtzeeObj.evalRoll)}
              ruleFn={yahtzeeObj.evalRoll}
            />
            <RuleRow
              name="Chance"
              score={scores.chance}
              description={chanceDescription}
              // doScore={() => doScore("chance", chance.evalRoll)}
              // ruleFn={chance.evalRoll}
              // doScore={() => doScore("chance", chanceObj.evalRoll)}
              // ruleFn={(dice: number[]) => chanceObj.evalRoll(dice)}
              doScore={() => doScore("chance", chanceObj.evalRoll)}
              ruleFn={(dice: number[]) => chanceObj.evalRoll(dice)}
            />
          </tbody>
        </table>
      </section>
      <h2>TOTAL SCORE: {getTotalScore()}</h2>
    </ScoreTableContainer>
  );
};
