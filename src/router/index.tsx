import { Route, Routes } from "react-router-dom";
import { Login, Register } from "src/pages";
import { RouteInterface } from "./types";

export default function Router() {
  const routes = [
    {
      path: "/",
      id: "login",
      element: <Login />,
    },
    { path: "/register", id: "register", element: <Register /> },
  ] as Array<RouteInterface>;

  return (
    <Routes>
      {routes.map(({ path, element, id }) => (
        <Route path={path} element={element} key={id} />
      ))}
    </Routes>
  );
}
