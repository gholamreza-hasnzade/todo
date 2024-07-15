// * import config
import { AppConfigurations } from "@/configs/app-configurations/app.configurations";

// * import style
import { TodoViewStyle as S } from "@/components/views/todo/todo.view.style";

// * import components
import { Flex, Typography } from "@/components/atoms";
import { useState } from "react";
import { TodoTemplate } from "@/components/Templates/todoTemplate.template";

export const TodoView = () => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const addTodo = (text: string) => {
    console.log('afafasf');
    
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <AppConfigurations>
      <S.Container>
        <Flex
          height={75}
          align="center"
          justify="center"
          //background={'#ef4056'}
          borderRadius={8}
        >
          <Typography variant="h1" component="h2">
            TODO APP LIST
          </Typography>
        </Flex>

        
        <TodoTemplate todos={todos} onAdd={addTodo} onDelete={deleteTodo} />
      </S.Container>
    </AppConfigurations>
  );
};
