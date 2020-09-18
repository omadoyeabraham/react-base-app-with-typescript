import React from "react";

import Goal from "../modules/goals/components/goal.component";
import IGoal from "../modules/goals/interfaces/goal.interface";

export default {
  title: "Goal",
  component: Goal,
  excludeStories: /.*Data$/,
};

export const goalData: IGoal = {
  id: "1",
  title: "This is a test project",
  description:
    "This task was created to test the Project component in storybook",
  percentage_completed: 45,
  completed: false,
  pinned: false,
  created_at: new Date(),
};

export const Default = () => <Goal goal={{ ...goalData }} />;
