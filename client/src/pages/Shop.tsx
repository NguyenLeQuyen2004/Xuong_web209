import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Grid, CardMedia, Stack, Typography } from "@mui/material";
import ProductList from "src/components/ProductList";
import instance from "src/apis";
import { Product } from "src/types/Product";
import Loading from "src/components/Loading";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getAllProduct = async () => {
    try {
      setLoading(true);
      const { data } = await instance.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div style={{ margin: "20px" }}>
      <Container>
        <Loading isShow={loading} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="500px"
              image="3.webp"
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="500px"
              image="4.webp"
              sx={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "20px 0" }}
        >
          NEW ARRIVALS
        </Typography>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {products.map((product, index) => (
            <ProductList key={index} product={product} />
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default Shop;
