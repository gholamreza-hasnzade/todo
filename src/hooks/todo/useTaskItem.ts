import { useDrag } from "react-dnd";
import { Task } from "@/constants/types/task/task.constant";

export const useTaskItem = (task: Task) => {
  const [, dragRef] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
  }));

  const getStatusColor = (status: 'todo' | 'in-progress' | 'done') => {
    switch (status) {
      case 'todo':
        return 'red';
      case 'in-progress':
        return 'yellow';
      case 'done':
        return 'green';
      default:
        return 'gray';
    }
  };

  return {
    dragRef,
    statusColor: getStatusColor(task.status),
  };
};
