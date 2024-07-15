import  { FC } from "react";
import styled from "@emotion/styled";
import { Typography as TypographyMUI, TypographyProps } from "@mui/material";

// Single Responsibility Principle (SRP)
const STypography = styled(TypographyMUI)<TypographyProps>`
  color: ${({ theme }) => theme.BLACK};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : "500")};
  line-height: 1.5;
`;

// Open/Closed Principle (OCP)
export const Typography: FC<TypographyProps> = (props) => {
  // Destructure props if needed
  const { id, children, color, fontWeight, fontSize, variant, ...otherProps } =
    props;

  // Dependency Inversion Principle (DIP) - Consider passing theme as a prop
  return (
    <STypography
      id={id}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      variant={variant} // Ensure variant is passed correctly
      {...otherProps}
    >
      {children}
    </STypography>
  );
};
