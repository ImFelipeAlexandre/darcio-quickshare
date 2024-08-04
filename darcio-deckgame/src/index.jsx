import React from "react";
import ReactDOMClient from "react-dom/client";
import { CardGameScreen } from "./screens/CardGameScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CardGameScreen />);
