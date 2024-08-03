import { Button, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import instance from "src/apis";
import { InputText } from "src/components/elements/InputText";
import { MIN_PASSWORD } from "src/consts";
import { useProductCart } from "src/hooks/useProductCart";
import isEmail from "validator/lib/isEmail";

type LoginFormParams = {
  email: string;
  password: string;
};

const Login = () => {
  const nav = useNavigate();
  const { getCartUser } = useProductCart();

  const validate = (values: LoginFormParams) => {
    const { email, password } = values;
    const errors: ValidationErrors = {};
    if (!email) errors.email = "Can nhap email vao";
    if (email && !isEmail(email)) errors.email = "Chua dung dinh dang email";
    if (!password) errors.password = "Can nhap password vao";
    if (password && password.length < MIN_PASSWORD)
      errors.password = `Can nhap password toi thieu ${MIN_PASSWORD} ky tu`;
    return errors;
  };
  const styles = {
    container: {
      maxWidth: 400,
      padding: 20,
      borderRadius: 10,
      margin: "auto",
      marginTop: 50,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    button: {
      marginTop: 10,
    },
  };

  const onSubmit = async (values: LoginFormParams) => {
    try {
      const { data } = await instance.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // luu object
      getCartUser();
      alert("Login success, switch to Admin?");
      nav("/admin");
    } catch (error) {}
  };

  return (
    <Container style={styles.container}>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Login
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ values }) => {
          return (
            <Stack gap={2}>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Email"}
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Password"}
                    messageError={meta.touched && meta.error}
                    type="password"
                  />
                )}
              />
              <Button
                variant="contained"
                onClick={() => onSubmit(values)}
                style={styles.button}
              >
                Submit
              </Button>
              <Typography>
                Don't have an account? <Link to="/register">Register</Link>
              </Typography>
            </Stack>
          );
        }}
      />
    </Container>
  );
};

export default Login;
