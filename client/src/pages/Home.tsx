import { Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import instance from "src/apis";
import Banner from "src/components/Banner";
import Loading from "src/components/Loading";
import ProductList from "src/components/ProductList";
import { Product } from "src/types/Product";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(9999999); // A large number as default

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

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= minPrice &&
      product.price <= maxPrice
  );

  return (
    <>
      <Loading isShow={loading} />
      <Banner page="Home" />
      <br />
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products"
        />
        <TextField
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          placeholder="Min Price"
        />
        <TextField
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          placeholder="Max Price"
        />
      </Stack>
      <br />
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {filteredProducts.map((product, index) => (
          <ProductList key={index} product={product} />
        ))}
      </Stack>
    </>
  );
}

export default Home;
