// * Import necessary types

import { ReactNode } from 'react';
import { BoxProps } from '@mui/material/Box';


export interface IFlex extends BoxProps {
    flexDirection?: 'row' | 'column';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: string;
    children?: ReactNode;
    height?: string;
    width?: string;
    background?: string;
    borderRadius?: number;
}