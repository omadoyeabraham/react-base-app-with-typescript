import React from "react";

import IGoal from "../interfaces/goal.interface";
import SvgIcon, {
  SvgIconTypes,
} from "../../common/components/svg-icon.component";

interface IGoalProps {
  goal: IGoal;
}

const Goal = (props: IGoalProps) => {
  const { goal } = props;
  return (
    <div className="goal border rounded-lg p-2 flex justify-between">
      <div>
        <span className="block">{goal.title}</span>
        <span className="text-sm text-gray-500">01-Jan-2020 - 12-Dec-2020</span>
      </div>
      <div>{goal.percentage_completed}%</div>
      <div>01-Jan-2020 - 12-Dec-2020</div>
      <SvgIcon
        iconName={SvgIconTypes.DOTS_HORIZONTAL}
        className="text-gray-700"
      />
    </div>
  );
};

export default Goal;
