// * import tools
import React from "react";
import styled from "@emotion/styled";

// * import types
import { Task } from "@/constants/types/task/task.constant";

// * import components
import { TaskItem } from "@/components/molecules";


// * import hook
import {useTaskList } from "@/hooks/todo/useTaskList";



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
export const TaskList: React.FC<TaskListProps> = ({ tasks, status, onDropTask }) => {
  const { dropRef } = useTaskList(status, onDropTask);

  return (
    <STaskList ref={dropRef}>
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </STaskList>
  );
};
