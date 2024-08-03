import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import instance from "src/apis";
import Loading from "src/components/Loading";
import { CartItem, Product } from "src/types/Product";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCart } from "src/contexts/ShoppingContext";
import { useProductCart } from "src/hooks/useProductCart";

const ProductDetail = () => {
  const { addToCart } = useProductCart();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();
  const [quantity, setQuantity] = useState<number>(0);

  const getProduct = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await instance.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  const handleAddToCart = (product: Product) => {
    if (quantity <= 0) return;
    addToCart({ product, quantity });
  };

  return (
    <div>
      <Loading isShow={loading} />
      <Container className="pr-detail">
        {product && (
          <div className="ctsp">
            <CardMedia
              component="img"
              alt="green iguana"
              height="400"
              image={product.image}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price: ${product.price}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {product.description}
              </Typography>
              {/* <Typography>Rate: {product.rating.count}</Typography> */}
              <Stack direction="row" gap={2} alignItems="center">
                <Typography>Quantity: </Typography>
                <IconButton
                  onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
                >
                  <RemoveIcon />
                </IconButton>
                <TextField
                  id="outlined-basic"
                  label="quantity"
                  variant="outlined"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <IconButton onClick={() => setQuantity(quantity + 1)}>
                  <AddIcon />
                </IconButton>

                <Button
                  variant="outlined"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>
              </Stack>
            </CardContent>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetail;
