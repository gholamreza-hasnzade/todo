// * import tools
import React from "react";
import { useDrag } from "react-dnd";
import styled from "@emotion/styled";

// * import types
import { Task } from "@/components/types";
import { Typography } from "@/components/atoms";

type TaskItemProps = {
  task: Task;
};

const STaskItem = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.WHITE};
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const Driver = styled.div<{ status: 'todo' | 'in-progress' | 'done' }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background-color: ${({ status }) => {
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
  }};
`;
export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  console.log(task);
  
  const [, dragRef] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
  }));
  return (
    <STaskItem ref={dragRef}>
      <Driver status={task.status} />
      <Typography>{task?.title}</Typography>
    </STaskItem>
  );
};
