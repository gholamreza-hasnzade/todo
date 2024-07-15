// * Import Casual modules
import { FC } from "react";

// * Import Tools
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

// * import interFaces
import { IMaterialUIProvider } from "@/configs/app-configurations/mui/material-ui.config.interface";
//* import theme
import { MATERIAL_UI_THEME_LIGHT_CONFIG } from "@/configs/app-configurations/mui/material-ui.config.theme";

export const MaterialUIConfig: FC<IMaterialUIProvider> = ({ children }) => {
  return (
    <MUIThemeProvider theme={MATERIAL_UI_THEME_LIGHT_CONFIG}>
      {children}
    </MUIThemeProvider>
  );
};
