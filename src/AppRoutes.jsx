import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Panel from "./screens/layout/Panel";

const Dashboard = lazy(() => import("./screens/dashboard/dashboard"));
const Request = lazy(() => import("./screens/request/request"));
const Services = lazy(() => import("./screens/services/services"));
const Galery = lazy(() => import("./screens/galery/galery"));
const Project = lazy(() => import("./screens/project/project"));

/*
const freeRoutes = [
  {
    path: "/login",
   // component: Login,
    exact: true,
  },
];*/

const protectedRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/request",
    component: Request,
    exact: true,
  },
  {
    path: "/services",
    component: Services,
    exact: true,
  },
  {
    path: "/galery",
    component: Galery,
    exact: true,
  },
  {
    path: "/project",
    component: Project,
    exact: true,
  },
];

const AppRoutes = () => {
  return (
    <Router>
      <Panel>
        <Routes>
          {protectedRoutes.map((item) => {
            const Component = item.component;
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<Component />}
                exact={item.exact}
              />
            );
          })}
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Panel>
    </Router>
  );
};

export default AppRoutes;
