// * Import toold
import { ReactNode, CSSProperties } from 'react';
import { ButtonProps } from "@mui/material";

// Interface for all props accepted by the AllPropsButton component
export interface IButton extends ButtonProps {
  // Button text content
  children: ReactNode;

  // Optional click handler function
  onClick?: () => void;



  // Additional CSS class names to apply (optional)
  className?: string;

  // Custom styles to apply directly (optional)
  style?: CSSProperties;

  // Additional props to pass through to the underlying button element (optional)
  ariaLabel?: string; // For accessibility
  tabIndex?: number; // For accessibility or focus management
  // ... you can add more props as needed
}
