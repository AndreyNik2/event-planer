import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout: FC = () => {
  return (
    <>
      <header>
        <h1>Create event</h1>
      </header>
      <Outlet />
    </>
  );
};
