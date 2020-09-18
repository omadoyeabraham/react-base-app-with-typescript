import React from "react";

import ITask from "../interfaces/task.interface";
import SvgIcon, {
  SvgIconTypes,
} from "../../common/components/svg-icon.component";

// Interface defining the expected props for a task
interface ITaskProps {
  task: ITask;
  onCompleteTask: Function;
  onPinTask: Function;
}

/**
 * Task component
 *
 * @type Presentational Component
 * @param props
 */
const Task = (props: ITaskProps) => {
  const { task } = props;
  return (
    <div className="task border rounded-lg p-2 flex justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          className={`mr-4 form-checkbox ${
            task.completed ? "text-blue-400" : ""
          }`}
        />
        <input
          type="text"
          value={task.title}
          readOnly={true}
          className={`${task.completed ? "text-gray-500 line-through" : ""}`}
        />
      </div>
      <SvgIcon
        iconName={SvgIconTypes.STAR}
        className={`${task.pinned ? "text-blue-400" : "text-gray-400"}`}
      />
    </div>
  );
};

export default Task;
