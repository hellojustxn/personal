import { useRoutes } from "react-router-dom";
import { routes } from "./main/main-routing.module";

export const Router = (drawer) => {
  let router = useRoutes(routes);
  return <>{router}</>;
};