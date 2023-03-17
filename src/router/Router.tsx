import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRouters";

export const Router: FC = memo(function Routerfunc() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {homeRoutes.map((route) => (
        <Route
          key={route.path}
          path={`/home${route.path}`}
          element={<HeaderLayout>{route.children}</HeaderLayout>}
        />
      ))}
      ;
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});
