import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main>
      <h1>App Layout</h1>
      <Outlet />
    </main>
  );
}
