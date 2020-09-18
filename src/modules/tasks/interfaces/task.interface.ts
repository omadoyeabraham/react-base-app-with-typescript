/**
 * Enum for the various priority levels of a task
 */
export enum ETaskPriority {
  LOW,
  MEDIUM,
  HIGH,
}

/**
 * Interface which defines a task
 */
export default interface ITask {
  id: string;
  title: string;
  description?: string;
  pinned: boolean;
  completed: boolean;
  priority?: ETaskPriority;
  created_at: Date;
}
