import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Container className="notfound">
        <h1>404</h1>
        <h2>Oh, Not found!</h2>
        <h2>
          <Link to="/">Go to back home</Link>
        </h2>
      </Container>
    </div>
  );
};

export default NotFound;
