import { hydrateRoot } from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { createClientRouter } from "./routes";
import "./index.css";

const router = createClientRouter();

hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={router} />
);
