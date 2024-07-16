import { useState, useEffect } from "react";
import { Task } from "@/constants/types/task/task.constant";

const LOCAL_STORAGE_KEY = "tasks";

export const useBoard = () => {
  const [state, setState] = useState<{
    tasks: Task[];
    newTaskTitle: string;
  }>({
    tasks: [],
    newTaskTitle: "",
  });

  useEffect(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setState((prevState) => ({
        ...prevState,
        tasks: JSON.parse(savedTasks),
      }));
    }
  }, []);

  useEffect(() => {
    if (state.tasks.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.tasks));
    }
  }, [state.tasks]);

  const handleDropTask = (
    taskId: number,
    newStatus: "todo" | "in-progress" | "done"
  ) => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ),
    }));
  };

  const handleCreateTask = () => {
    if (state.newTaskTitle.trim()) {
      const newTask: Task = {
        id: state.tasks.length + 1,
        title: state.newTaskTitle,
        status: "todo",
      };
      setState((prevState) => ({
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        newTaskTitle: "",
      }));
    }
  };

  const setNewTaskTitle = (title: string) => {
    setState((prevState) => ({
      ...prevState,
      newTaskTitle: title,
    }));
  };

  return {
    tasks: state.tasks,
    newTaskTitle: state.newTaskTitle,
    setNewTaskTitle,
    handleDropTask,
    handleCreateTask,
  };
};
