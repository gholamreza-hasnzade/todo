// * import config
import { AppConfigurations } from "@/configs/app-configurations/app.configurations";

// * import style
import { TodoViewStyle as S } from "@/components/views/todo/todo.view.style";

// * import components
import { Flex, Typography, Input, Button, Form } from "@/components/atoms";

export const TodoView = () => {
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

        <Form>
          <Flex align="center">
            <Input placeholder="please write here..." />
            <Button>add Task</Button>
          </Flex>
        </Form>
      </S.Container>
    </AppConfigurations>
  );
};
