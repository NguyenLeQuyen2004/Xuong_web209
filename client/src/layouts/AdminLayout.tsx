import { Stack } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "src/components/SideBar";

function AdminLayout() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      nav("/login");
      return;
    }
  }, [token, nav]);
  return (
    <>
      <Stack direction={"row"} gap={2}>
        <Sidebar />
        <Outlet />
      </Stack>
    </>
  );
}

export default AdminLayout;
