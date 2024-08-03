import {
  Button,
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Banner from "src/components/Banner";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductCart } from "src/hooks/useProductCart";
import { Link } from "react-router-dom";
import { useCart } from "src/contexts/ShoppingContext";

const labels = ["Product", "Price", "Quantity", "Subtotal", ""];
function Cart() {
  const { cart, setCart } = useCart();
  const { removeToCart } = useProductCart();
  const handleQuantityChange = (index: number, newQuantity: number) => {
    setCart((prevCart) => {
      if (prevCart === null) {
        return null; // Trả về null nếu giỏ hàng ban đầu là null
      }

      const updatedProducts = prevCart.products.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      return {
        ...prevCart,
        products: updatedProducts,
      };
    });
  };

  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  return (
    <>
      <Banner page="Cart" />
      <Container>
        <Wrapper>
          <LabelWrapper
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            {labels.map((label, index) => (
              <Typography fontWeight={500} key={index}>
                {label}
              </Typography>
            ))}
          </LabelWrapper>
          {/* Cart Item */}
          {cart?.products &&
            cart.products.map((item, index) => (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={4}>
                  <img src={item.product.image} width={"50px"} />
                  <Typography fontWeight={500}>
                    {item.product.title.substring(0, 10)}...
                  </Typography>
                </Stack>

                <Typography fontWeight={500}>${item.product.price}</Typography>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value))
                  }
                />
                <Typography fontWeight={500}>
                  ${calculateSubtotal(item.product.price, item.quantity)}
                </Typography>
                <IconButton onClick={() => removeToCart(item.product._id)}>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Stack>
            ))}
        </Wrapper>
        <Stack alignItems={"center"}>
          <Link to="/checkout">
            <Button variant="contained" sx={{ mb: 10 }}>
              Checkout
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}

export default Cart;

const Wrapper = styled(Stack)({
  padding: 72,
});

const LabelWrapper = styled(Stack)(({}) => ({
  background: "#F9F1E7",
  height: 55,
}));
