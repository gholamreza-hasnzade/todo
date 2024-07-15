import { FC } from "react";

// * import
import { TodoItemMolecule } from "@/components/molecules/todoItem/todoItem.molecule";

//* import
import { ITodoList } from "@/components/organisms/todoList/todList.oraganism.interface";


export const TodoList: FC<ITodoList> = ({ todos, onDelete }) => {
  return (
    <>
      {todos?.map((todo) => (
        <TodoItemMolecule
          key={todo.id}
          text={todo.text}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </>
  );
};
