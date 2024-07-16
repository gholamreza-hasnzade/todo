// * import tools
import React from "react";
import styled from "@emotion/styled";

// * import types
import { Task } from "@/constants/types/task/task.constant";
// * import components
import { Typography } from "@/components/atoms";
import { Card } from "@mui/material";

// * import hooks
import { useTaskItem } from "@/hooks/todo/useTaskItem";

type TaskItemProps = {
  task: Task;
};

const STaskItem = styled(Card)`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.WHITE};
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const Driver = styled.div<{ statusColor: string }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background-color: ${({ statusColor }) => statusColor};
`;
export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { dragRef, statusColor } = useTaskItem(task);
  return (
    <STaskItem ref={dragRef}>
      <Driver statusColor={statusColor} />
      <Typography>{task?.title}</Typography>
    </STaskItem>
  );
};
