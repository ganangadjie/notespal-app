import React from "react";
import { authService } from "../configs/auth";
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
