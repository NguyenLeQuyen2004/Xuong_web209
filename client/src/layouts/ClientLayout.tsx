import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Banner from "src/components/Banner";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Loading from "src/components/Loading";
import { useLoading } from "src/contexts/loading";
import { useUser } from "src/contexts/user";
import { useProductCart } from "src/hooks/useProductCart";
import { User } from "src/types/User";

function ClientLayout() {
  const { loading } = useLoading();
  const { getCartUser } = useProductCart();

  useEffect(() => {
    getCartUser();
  }, []);

  return (
    <>
      <Loading isShow={loading} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default ClientLayout;
