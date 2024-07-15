// * import tools
import { FC } from "react";
import styled from "@emotion/styled";
// * import style
import { IButton } from "@/components/atoms/button/button.atom.interface";

// *  mui
import { Button as ButtonMUI } from "@mui/material";

// Import a button styling library like `@emotion/react` or a custom solution

const SButton = styled(ButtonMUI)<IButton>`
  /* Base styles for all buttons (padding, font size, etc.) */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;
  cursor: pointer;
  outline: none;
`;
export const Button: FC<IButton> = ({
  children,
  onClick,
  className,
  style,
  ariaLabel,
  tabIndex,
  ...rest
}) => {
  return (
    <SButton
      className={className}
      style={style}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={onClick}
      {...rest}
    >
      {children}
    </SButton>
  );
};
