// * Import tools
import { FC } from "react";

// * Import interfase
import { IAppConfigurations } from "@/configs/app-configurations/app.configurations.interface";

// * import configs
import { EmotionConfig } from "@/configs/app-configurations/emotion/emotion.config";
import { BaseStylesConfig } from "@/configs/app-configurations/base-styles/base-styles.config";
import { MaterialUIConfig } from "@/configs/app-configurations/mui/material-ui";



export const AppConfigurations: FC<IAppConfigurations> = ({ children }) => {
  return (
    <MaterialUIConfig>
      <BaseStylesConfig />
      <EmotionConfig>{children}</EmotionConfig>
    </MaterialUIConfig>
  );
};
