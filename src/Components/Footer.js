import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#212529", color: "white", height: "40px" }}
      className="fixed-bottom"
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "right",
          padding: "10px",
          fontWeight: "medium",
        }}
      >
        <p style={{ fontWeight: "700" }}>React container</p>
      </Container>
    </Container>
  );
};
