import React, { Children } from "react";
import { useRoutes } from "react-router-dom";
import List from "./pages/admin/product/List";
import Add from "./pages/admin/product/Add";
import Edit from "./pages/admin/product/Edit";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ClientLayout from "./layouts/ClientLayout";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layouts/AdminLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import ListUser from "./pages/admin/User/ListUser";
import Shop from "./pages/Shop";

const routeConfig = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <List />,
      },
      {
        path: "product/list",
        element: <List />,
      },
      {
        path: "product/add",
        element: <Add />,
      },
      {
        path: "product/edit/:id",
        element: <Edit />,
      },
      {
        path: "/admin/users",
        element: <ListUser />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    ),
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
