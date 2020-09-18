import ITask from "../../tasks/interfaces/task.interface";

/**
 * Interface for a goal
 */
export default interface IGoal {
  id: string;
  title: string;
  description: string;
  percentage_completed: number;
  pinned: boolean;
  completed: boolean;
  tasks?: ITask[];
  created_at: Date;
}
