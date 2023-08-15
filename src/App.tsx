import { Fragment } from "react";

/**
 * Imports Material UI components
 */
import { CssBaseline } from "@mui/material";

/**
 * Imports components
 */
import { GameController } from "./components/GameController";

/**
 * Imports css
 */
import "./App.css";

/**
 * Defines the component
 */
export const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <GameController />
    </Fragment>
  );
};
