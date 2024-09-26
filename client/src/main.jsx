import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./pages/Signup.jsx";
import Login from "./pages/login.jsx";
import Team from "./pages/Team.jsx";
import Leagues from "./pages/League.jsx";
import League from "./components/League.jsx";
import Players from "./components/Players.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/league",
        element: <League />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/players",
        element: <Players />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
