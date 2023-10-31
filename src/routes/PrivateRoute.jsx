import React from "react";
import { authService } from "../config/Auth/Auth";
import { Outlet } from "react-router-dom";
import Unauthorized from "../pages/Unauthorized";

export function PrivateRoute() {
  if (authService.isAuthorized())
    return (
      <>
        <Outlet />
      </>
    );

  return <Unauthorized />;
}
