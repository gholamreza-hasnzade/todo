// * import tools
import React from "react";
import { useDrag } from "react-dnd";
import styled from "@emotion/styled";

// * import types
import { Task } from "@/components/types";

type TaskItemProps = {
  task: Task;
};

const STaskItem = styled.div`
  width: 100%;
  height: 150px;
  background: red;
  border-radius: 8px;
  cursor: pointer;
`;
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [, dragRef] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
  }));
  return <STaskItem ref={dragRef}>{task.title}</STaskItem>;
};

export default TaskItem;
