import { ThemeProvider } from "@/components/theme-provider";
import "@/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import QR from "./refactoring/QR";
// import Routes from "./Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Routes /> */}
      <QR />
    </ThemeProvider>
  </React.StrictMode>
);
