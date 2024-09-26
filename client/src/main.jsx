import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/login.jsx";
import Team from "./pages/Team.jsx";
import League from "./pages/League.jsx";

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
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
