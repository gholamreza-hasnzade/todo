import  { forwardRef } from "react";
import styled from "@emotion/styled";
import { IInput } from "@/components/atoms/input/input.atom.interface";

const SInput = styled.input<IInput>`
  width: 350px;
  height: 40px;
  border-radius: 3px;
  padding-left: 6px;
  color: ${(props) => (props.disabled ? "#ccc" : "#333")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &::placeholder {
    color: #a7a7a7;
  }

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: #fff;
          border: 1px solid #d1d1d1;
        `;
      case "outline":
        return `
          background-color: rgba(0, 0, 0, 0);;
          border: 1px solid #ccc;
        `;
      case "tertiary":
        return `
          background-color: rgba(0, 0, 0, 0);
          border-bottom: 1px solid #007bff;
        `;
      default:
        return "primary";
    }
  }}
`;

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      disabled = false,
      id,
      name,
      onChange,
      placeholder,
      type = "text",
      variant = "primary",
      value,
    },
    ref
  ) => {
    return (
      <SInput
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        disabled={disabled}
        variant={variant}
        value={value}
        ref={ref}
      />
    );
  }
);
