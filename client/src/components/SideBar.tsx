import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa thông tin đăng nhập khỏi sessionStorage
    sessionStorage.removeItem("accessToken");
    // sessionStorage.removeItem("isAdmin");
    if (confirm("Are you sure? ")) {
      navigate("/login");
    } else {
      return false;
    }
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#e1f5fe",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {[
          {
            text: "Admin Page",
            icon: <HomeIcon />,
            path: "/admin/product/list",
          },
          {
            text: "Add new Product",
            icon: <AddCircleIcon />,
            path: "/admin/product/add",
          },
          { text: "Users", icon: <AccountBoxIcon />, path: "/admin/users" },
          // { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </Drawer>
  );
}

export default Sidebar;
