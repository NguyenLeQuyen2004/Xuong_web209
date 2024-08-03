import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <img src="/logo.png" alt="logo" style={{ width: "15%" }} />
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Address: 123 ABC Street, XYZ City
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Phone: 0123456789
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Typography variant="body1" component="nav">
              <Link href="/" color="textPrimary">
                Home |
              </Link>
              <Link href="/about" color="textPrimary">
                About |
              </Link>
              <Link href="/products" color="textPrimary">
                Products |
              </Link>
              <Link href="/blog" color="textPrimary">
                Blog |
              </Link>
              <Link href="/contact" color="textPrimary">
                Contact
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            <Typography variant="body1" component="nav">
              <li>
                <Link
                  href="https://facebook.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  LinkedIn
                </Link>
              </li>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          marginTop={4}
        >
          © 2024 quyennlph37238@fpt.edu.vn. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
