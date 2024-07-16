// * Import Tools
import { createTheme, Theme } from '@mui/material/styles';


export const MATERIAL_UI_THEME_LIGHT_CONFIG: Theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
      
        button: {
            fontSize: '1rem',
        }

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },

    }
})
