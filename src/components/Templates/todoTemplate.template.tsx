import { FC } from "react";
import { TodoForm } from "@/components/molecules/todoForm/todoForm.molecule";
import { TodoList } from "@/components/organisms/todoList/todoList.organism";
import { ITodoTemplateProps } from "@/components/Templates/todoTemplate.template.interface";
export const TodoTemplateTemplate: FC<ITodoTemplateProps> = ({
  todos,
  onAdd,
  onDelete,
}) => {
  return (
    <div>
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
};
