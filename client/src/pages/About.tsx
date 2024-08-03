import { CardMedia, Container } from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <Container>
      <CardMedia
        component="img"
        alt="green iguana"
        height="70%"
        image="1.jpg"
        sx={{ objectFit: "contain" }}
      />
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to our online clothing store! We offer a wide selection of
          trendy and fashionable clothing for men, women, and children. Our
          mission is to provide high-quality clothing at affordable prices,
          ensuring that our customers always look and feel their best.
        </p>

        <h3>Our History</h3>
        <p>
          Our clothing store was founded in 2010 by John Doe, a fashion
          enthusiast with a passion for bringing the latest trends to our
          customers. Since then, we have grown from a small boutique to a
          reputable online store, serving customers worldwide. We take pride in
          our commitment to quality and customer satisfaction.
        </p>

        <h3>Our Team</h3>
        <ul>
          <li>John Doe - Founder and CEO</li>
          <li>Jane Smith - Head of Design</li>
          <li>Michael Johnson - Marketing Manager</li>
          <li>Sarah Brown - Customer Support Specialist</li>
        </ul>

        <h3>Our Values</h3>
        <ul>
          <li>
            Quality: We believe in providing clothing of the highest quality to
            our customers.
          </li>
          <li>
            Style: We stay up-to-date with the latest fashion trends to offer
            stylish clothing options.
          </li>
          <li>
            Affordability: We strive to offer affordable prices without
            compromising on quality.
          </li>
          <li>
            Customer Satisfaction: We prioritize the satisfaction of our
            customers and aim to provide excellent service.
          </li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          Address: 123 Fashion Street, Cityville
          <br />
          Phone: 0123456789
          <br />
          Email: info@example.com
        </p>
        <p>Follow us on social media:</p>
        <ul>
          <li>
            <a href="https://facebook.com/example">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/example">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com/example">Instagram</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
