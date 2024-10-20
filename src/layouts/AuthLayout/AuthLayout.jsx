import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main>
      <h1>AuthLayout</h1>
      <Outlet />
    </main>
  );
}
