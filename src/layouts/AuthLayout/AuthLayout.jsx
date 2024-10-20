import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="bg-[#F7F4EF]">
      <Outlet />
    </main>
  );
}
