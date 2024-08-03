import { Badge, Stack, styled, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useCart } from "src/contexts/ShoppingContext";

const menus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/shop",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const { cart } = useCart();

  const cartQuantity = useMemo(
    () =>
      cart && cart.products
        ? cart.products.reduce((total, { quantity }) => total + quantity, 0)
        : 0,
    [cart]
  );

  return (
    <Wrapper
      sx={{
        padding: "0 20px", // Thay đổi padding để phù hợp với kích thước màn hình nhỏ hơn
        "@media (min-width: 600px)": {
          padding: "0 50px", // Giữ nguyên padding cho màn hình lớn hơn 600px
        },
      }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <img src="/logo.png" alt="logo" style={{ width: "15%" }} />
      <Stack
        direction={"row"}
        gap={"20px"}
        sx={{ "@media (min-width: 600px)": { gap: "75px" } }}
      >
        {/* menu */}
        {menus.map((menu, index) => (
          <Link to={menu.link} key={index}>
            <Typography fontWeight={"500"}>{menu.label}</Typography>
          </Link>
        ))}
      </Stack>
      <Stack
        gap={"20px"}
        direction={"row"}
        sx={{ "@media (min-width: 600px)": { gap: "45px" } }}
      >
        <Link to={"/login"}>
          <img src="/user.svg" alt="user" />
        </Link>
        {/* <SearchIcon /> */}
        <FavoriteBorderIcon />
        <Link to={"/cart"}>
          <Badge badgeContent={cartQuantity} color="secondary">
            <img src="/cart.svg" alt="cart" />
          </Badge>
        </Link>
      </Stack>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Stack)({
  height: 100,
  padding: "0 20px", // Đặt padding mặc định cho container
  backgroundColor: "#FFFAF0",
});
