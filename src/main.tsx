import React from "react";
import ReactDOM from "react-dom/client";

import { HomeView } from "@/components/views";
import { AppConfigurations } from "@/configs/app-configurations/app.configurations";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppConfigurations>
      <HomeView />
    </AppConfigurations>
  </React.StrictMode>
);
