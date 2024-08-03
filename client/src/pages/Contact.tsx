import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        We strive every day to bring our customers the best products and
        services.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Working hours:</strong> Monday - Sunday, 10:00 AM - 9:00 PM
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box border={1} borderRadius={4} p={2}>
            <Typography variant="body1">
              <strong>Customer Care Hotline:</strong> 1900 63 65 91
            </Typography>
            <Typography variant="body1">
              <strong>Sales Hotline:</strong> 039 999 9365
            </Typography>
            <Typography variant="body1">
              <strong>Office Hotline:</strong> 028 7300 8589
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> cskh@routine.vn
            </Typography>
            <Typography variant="body1">
              <strong>Store List:</strong> Routine store system nationwide
            </Typography>
            <Typography variant="body1">
              <strong>Social Media:</strong> Facebook - Instagram - Zalo -
              TikTok
            </Typography>
            <Typography variant="body1">
              <strong>Business Franchise Cooperation:</strong> 039 246 8886
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box border={1} borderRadius={4} p={2}>
            <Typography variant="h5" gutterBottom>
              Information
            </Typography>
            <ul>
              <li>
                <a href="#">About Routine</a>
              </li>
              <li>
                <a href="#">How to Order</a>
              </li>
              <li>
                <a href="#">Member Card Check Guide</a>
              </li>
              <li>
                <a href="#">Loyalty Customer Policy</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Warranty Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Contact Information</a>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
