import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppConfigurations } from "@/configs/app-configurations/app.configurations";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppConfigurations />
  </React.StrictMode>,
)
