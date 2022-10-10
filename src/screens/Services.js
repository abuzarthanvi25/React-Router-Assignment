import React from "react";
import Container from "@mui/material/Container";
import Content1 from "../components/Content1";
import Typography from "@mui/material/Typography";

function Services() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <Typography
          sx={{ textAlign: "center", color: "#fb8b24" }}
          variant="h1"
          gutterBottom
        >
          OUR SERVICES
        </Typography>
        <Content1 src="https://i.pinimg.com/originals/6a/fe/fc/6afefc6debb4e0e3e9fbcdac73fdbaed.jpg" />
        <Content1 src="https://i.pinimg.com/originals/6a/fe/fc/6afefc6debb4e0e3e9fbcdac73fdbaed.jpg" />
        <Content1 src="https://i.pinimg.com/originals/6a/fe/fc/6afefc6debb4e0e3e9fbcdac73fdbaed.jpg" />
        <Content1 src="https://i.pinimg.com/originals/6a/fe/fc/6afefc6debb4e0e3e9fbcdac73fdbaed.jpg" />
        <Content1 src="https://i.pinimg.com/originals/6a/fe/fc/6afefc6debb4e0e3e9fbcdac73fdbaed.jpg" />
        <Content1 src="https://i.pinimg.com/originals/6a/fe/fc/6afefc6debb4e0e3e9fbcdac73fdbaed.jpg" />
      </Container>
    </>
  );
}

export default Services;
