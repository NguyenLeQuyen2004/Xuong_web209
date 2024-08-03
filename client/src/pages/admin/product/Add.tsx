import { Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import instance from "src/apis";
import ProductForm from "src/components/ProductForm";
import { useLoading } from "src/contexts/loading";
import { ProductFormParams } from "src/types/Product";

function Add() {
  const nav = useNavigate();
  const { setLoading } = useLoading();

  const onSubmit = async (values: ProductFormParams) => {
    try {
      setLoading(true);
      await instance.post("/products", values);
      alert("Add successfull");
      nav("/admin/product/list");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Stack gap={2}>
          <Typography variant="h3" textAlign={"center"}>
            Add New Product
          </Typography>
          <ProductForm onSubmit={onSubmit} initialValues={{ isShow: true }} />
        </Stack>
      </Container>
    </>
  );
}

export default Add;
