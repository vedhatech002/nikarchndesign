import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // top-level layout (Navigation + outlet or you can have separate layout)
import Home from "./pages/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ProjectDetail from "./pages/ProjectDetail";
// import { Contact } from "lucide-react";
// create page components that render the existing components
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

const routes = [
  {
    path: "/",
    element: <App />, // App must render <Outlet /> where pages are mounted
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      //   { path: "portfolio", element: <Portfolio /> },
      //   { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/:id", element: <ProjectDetail /> },
    ],
  },
];

export const createClientRouter = () => createBrowserRouter(routes);

export default routes;
