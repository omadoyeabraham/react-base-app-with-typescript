import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "../modules/tasks/components/task.component";
import ITask, {
  ETaskPriority,
} from "../modules/tasks/interfaces/task.interface";

export default {
  component: Task,
  title: "Task",
  excludeStories: /.*Data$/,
};

export const taskData: ITask = {
  id: "1",
  title: "This is a test task",
  description: "This task was created to test the Task component in storybook",
  completed: false,
  pinned: false,
  priority: ETaskPriority.HIGH,
  created_at: new Date(),
};

export const actionsData = {
  onCompleteTask: action("onCompleteTask"),
  onPinTask: action("onPinTask"),
};

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
  <Task task={{ ...taskData, pinned: true }} {...actionsData} />
);

export const Completed = () => (
  <Task task={{ ...taskData, completed: true }} {...actionsData} />
);
