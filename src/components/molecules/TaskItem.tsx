import React from 'react';
import { useDrag } from 'react-dnd';

import { Task } from '@/components/types';

type TaskItemProps = {
  task: Task;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {

  const [, dragRef] = useDrag(() => ({
    type: 'task',
    item: { id: task.id },
  }));
  return <div ref={dragRef}>{task.title}</div>;
};

export default TaskItem;