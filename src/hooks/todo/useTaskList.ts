import { useDrop } from "react-dnd";

export const useTaskList = (
  status: "todo" | "in-progress" | "done",
  onDropTask: (taskId: number, status: "todo" | "in-progress" | "done") => void
) => {
  const [, dropRef] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) => onDropTask(item.id, status),
  }));

  return {
    dropRef,
  };
};
