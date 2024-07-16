import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import TaskList from "@/components/organisms/TaskList";
import { Task } from "@/components/types";
import { Input } from "../atoms";
import { Button } from "@mui/material";

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "in-progress" },
    { id: 3, title: "Task 3", status: "done" },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const handleDropTask = (taskId: number, newStatus: string) => {
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

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>Create New Task</h2>
        <Input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <Button onClick={handleCreateTask}>Add Task</Button>
        <h2>Todo</h2>
        <TaskList
          tasks={tasks.filter((task) => task.status === "todo")}
          status="todo"
          onDropTask={handleDropTask}
        />
        <h2>In Progress</h2>
        <TaskList
          tasks={tasks.filter((task) => task.status === "in-progress")}
          status="in-progress"
          onDropTask={handleDropTask}
        />
        <h2>Done</h2>
        <TaskList
          tasks={tasks.filter((task) => task.status === "done")}
          status="done"
          onDropTask={handleDropTask}
        />
      </div>
    </DndProvider>
  );
};

export default Board;
