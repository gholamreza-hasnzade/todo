"use client";
// * Import Tools
import { FC } from "react";
import styled from "@emotion/styled";

// * Import interface
import { IForm } from "@/components/atoms/form/form.atom.interface";

const SForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  padding: 16px;
  gap: 16px;
`;

export const Form: FC<IForm> = ({ onSubmit, children, ...rest }) => {
  return (
    <SForm onSubmit={onSubmit} {...rest}>
      {children}
    </SForm>
  );
};
