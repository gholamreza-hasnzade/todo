import React from 'react';
import { useDrop } from 'react-dnd';

import { Task } from '@/components/types';
import TaskItem from '@/components/molecules/TaskItem';

type TaskListProps = {
  tasks: Task[];
  status: string;
  onDropTask: (taskId: number, status: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, status, onDropTask }) => {
  const [, dropRef] = useDrop(() => ({
    accept: 'task',
    drop: (item: { id: number }) => onDropTask(item.id, status),
  }));

  return (
    <div ref={dropRef}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;