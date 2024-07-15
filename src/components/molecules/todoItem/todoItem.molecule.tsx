// * import tools
import { FC } from "react";
import styled from "@emotion/styled";

// * import interface
import { ITodoItem } from "@/components/molecules/todoItem/todoItem.molecule.interface";
import { Button, Typography } from "@/components/atoms";

export const TodoItemMolecule: FC<ITodoItem> = ({ text, onDelete }) => {
  const SItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  `;
  return (
    <SItemContainer>
      <Typography>{text}</Typography>
      <Button onClick={onDelete}>Delete</Button>
    </SItemContainer>
  );
};
