import { useState } from "react";
import { Task } from "@/constants/types/task/task.constant";

export const useBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "in-progress" },
    { id: 3, title: "Task 3", status: "done" },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const handleDropTask = (
    taskId: number,
    newStatus: "todo" | "in-progress" | "done"
  ) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleCreateTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: tasks.length + 1,
        title: newTaskTitle,
        status: "todo",
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  return {
    tasks,
    newTaskTitle,
    setNewTaskTitle,
    handleDropTask,
    handleCreateTask,
  };
};
