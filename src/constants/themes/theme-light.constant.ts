

import { Theme } from '@emotion/react'; // Import the Theme type from Emotion

declare module '@emotion/react' {
  export interface Theme {
    BLACK: string;
    WHITE: string;
    PRIMARY: string;
  }
}

// Now you can use the BLACK property in your theme
const BASE_COLORS: Theme = {
  // other theme properties...
  WHITE: '#ffffff',
  BLACK: '#000000',
  PRIMARY: '#ef4056',
};



export const THEME_LIGHT = {
  ...BASE_COLORS,

};