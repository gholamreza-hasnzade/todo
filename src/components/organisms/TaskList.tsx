// * import tools
import React from "react";
import { useDrop } from "react-dnd";
import styled from "@emotion/styled";

import { Task } from "@/components/types";
import { TaskItem } from "@/components/molecules";

type TaskListProps = {
  tasks: Task[];
  status: "todo" | "in-progress" | "done";
  onDropTask: (taskId: number, status: "todo" | "in-progress" | "done") => void;
};

const STaskList = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebf0f2;
  height: 100%;
  width: 80%;
  padding: 16px;
  gap: 8px;
`;
const TaskList: React.FC<TaskListProps> = ({ tasks, status, onDropTask }) => {
  const [, dropRef] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) => onDropTask(item.id, status),
  }));

  return (
    <STaskList ref={dropRef}>
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </STaskList>
  );
};

export default TaskList;
