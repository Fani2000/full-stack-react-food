import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
