// * import tools
import { FC, useState } from "react";

// * import components
import { Button, Flex, Form, Input } from "@/components/atoms";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export const TodoForm: FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };
  return (
    <Form>
      <Flex align="center" onSubmit={handleSubmit}>
        <Input
          placeholder="please write here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button>add Task</Button>
      </Flex>
    </Form>
  );
};
