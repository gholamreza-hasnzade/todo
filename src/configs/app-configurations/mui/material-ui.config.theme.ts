// * Import Tools
import { createTheme, Theme } from '@mui/material/styles';


// * Import Constants
//import { THEME_LIGHT } from '@/constants/themes';


const { palette: { augmentColor } } = createTheme();

//const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })


export const MATERIAL_UI_THEME_LIGHT_CONFIG: Theme = createTheme({
   /*  direction: 'rtl', */
    typography: {
        fontFamily: 'Roboto',
       /*  allVariants: {
            textAlign: "right"
        }, */
        button: {
            fontSize: '1rem',
        }

    },
    /* palette: {
        primary: {
            main: createColor(THEME_LIGHT.PRIMARY).main,
            contrastText: createColor(THEME_LIGHT.WHITE).main
        }
    }, */
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
       /*  MuiTextField: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                    width: "100%",
                    padding : "0",
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                        height: '45px', // Adjust height here
                        '& fieldset': {
                            borderColor: createColor(THEME_LIGHT.PRIMARY).main, // Default border color
                        },
                        '&:hover fieldset': {
                            borderColor: createColor(THEME_LIGHT.SECONDARY).main, // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: createColor(THEME_LIGHT.SECONDARY).main, // Border color when focused
                        },
                    },
                }
            }
        }, */
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
