// * import tools
import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//* import components
import { Button, Flex, Input, Typography } from "@/components/atoms";
import { TaskList } from "@/components/organisms";
// * import custom hooks
import { useBoard } from "@/hooks/todo/useBoard";

export const Board: FC = () => {
  const {
    tasks,
    newTaskTitle,
    setNewTaskTitle,
    handleDropTask,
    handleCreateTask,
  } = useBoard();

  return (
    <Flex height={"100vh"} width="100%" flexDirection="column">
      <DndProvider backend={HTML5Backend}>
        <Flex align="center" flexDirection="column" width="100%" height="100%">
          <Flex
            flexDirection="column"
            width="100%"
            height="20%"
            justify="center"
            align="center"
          >
            <Flex>
              <Input
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Enter task title"
              />
              <Button onClick={handleCreateTask}>Add Task</Button>
            </Flex>
          </Flex>

          <Flex width={"100%"} gap="10" height="80%" justify="center">
            <Flex
              width={"30%"}
              flexDirection="column"
              justify="center"
              align="center"
            >
              {" "}
              <Typography>Todo</Typography>
              <TaskList
                tasks={tasks.filter((task) => task.status === "todo")}
                status="todo"
                onDropTask={handleDropTask}
              />
            </Flex>

            <Flex
              width={"30%"}
              flexDirection="column"
              justify="center"
              align="center"
            >
              <Typography>In Progress</Typography>
              <TaskList
                tasks={tasks.filter((task) => task.status === "in-progress")}
                status="in-progress"
                onDropTask={handleDropTask}
              />
            </Flex>

            <Flex
              width={"30%"}
              flexDirection="column"
              justify="center"
              align="center"
            >
              <Typography>Done</Typography>
              <TaskList
                tasks={tasks.filter((task) => task.status === "done")}
                status="done"
                onDropTask={handleDropTask}
              />
            </Flex>
          </Flex>
        </Flex>
      </DndProvider>
    </Flex>
  );
};
