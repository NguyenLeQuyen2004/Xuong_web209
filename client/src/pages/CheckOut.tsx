import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Banner from "src/components/Banner";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "src/contexts/loading";
import { Field, Form } from "react-final-form";
import { InputText } from "src/components/elements/InputText";
import { useMemo } from "react";
import { useUser } from "src/contexts/user";
import { useProductCart } from "src/hooks/useProductCart";
import { useCart } from "src/contexts/ShoppingContext";
import instance from "src/apis";

const styles = {
  container: {
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    margin: "auto",
    marginTop: 50,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginLeft: "auto", // Để căn container sang trái
  },
  button: {
    marginTop: 10,
  },
};
type CheckoutFormParams = {
  name: string;
  phone: string;
  address: string;
  note: string;
  payment: string;
};

function Checkout() {
  const nav = useNavigate();
  const { setLoading } = useLoading();
  const { cart } = useCart();
  const { user } = useUser();
  const { getCartUser } = useProductCart();

  const totalPrice = useMemo(
    () =>
      cart
        ? cart.products.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
          )
        : 0,
    [cart]
  );

  const onSubmit = async (values: CheckoutFormParams) => {
    if (!user || !cart || !cart?.products.length) return;
    try {
      setLoading(true);
      await instance.post("/orders", {
        ...values,
        products: cart.products,
        user: user._id,
        totalPrice,
      });
      await getCartUser();
      alert("Orders successfully");
      nav("/");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Banner page="Checkout" />
      {/* Tieu de */}
      <Typography variant="h3" textAlign={"center"} mt={2}>
        Billing Details
      </Typography>
      <Button
        variant="outlined"
        color="error"
        style={{
          fontSize: "1.5rem",
          margin: "auto",
          display: "block",
        }}
      >
        Total Price: $ {totalPrice}
      </Button>
      <Container sx={{ mb: 10 }} style={styles.container}>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            payment: "COD",
          }}
          render={({ values }) => {
            return (
              <Stack gap={3}>
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Name"}
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field
                  name="phone"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Phone"}
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field
                  name="address"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Address"}
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field
                  name="Note"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Note"}
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field<string>
                  name="payment"
                  render={({ input }) => {
                    return (
                      <FormControl>
                        <FormLabel> Payment</FormLabel>
                        <RadioGroup {...input}>
                          <FormControlLabel
                            value="COD"
                            control={<Radio />}
                            label="COD"
                          />
                          <FormControlLabel
                            value="BANK"
                            control={<Radio />}
                            label="BANK"
                          />
                        </RadioGroup>
                      </FormControl>
                    );
                  }}
                />
                <Typography fontWeight={500}>
                  <Link to={"/cart"}>Back to Cart</Link>
                </Typography>
                <Button variant="contained" onClick={() => onSubmit(values)}>
                  Place Order
                </Button>
              </Stack>
            );
          }}
        />
      </Container>
    </>
  );
}

export default Checkout;

// const Wrapper = styled(Stack)({
//   paddingTop: 72,
// });

// const LabelWrapper = styled(Stack)(({ theme }) => ({
//   background: "#F9F1E7",
//   height: 55,
// }));
