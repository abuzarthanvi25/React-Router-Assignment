import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Content1 from "../components/Content1";

function Home() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <Typography
          sx={{ textAlign: "center", color: "#fb8b24" }}
          variant="h1"
          gutterBottom
        >
          HOME PAGE
        </Typography>
        <Content1 src="https://img.wallpapersafari.com/desktop/1366/768/48/99/QdMOeo.jpg" />
        <Content1 src="https://img.wallpapersafari.com/desktop/1366/768/48/99/QdMOeo.jpg" />
        <Content1 src="https://img.wallpapersafari.com/desktop/1366/768/48/99/QdMOeo.jpg" />
        <Content1 src="https://img.wallpapersafari.com/desktop/1366/768/48/99/QdMOeo.jpg" />
        <Content1 src="https://img.wallpapersafari.com/desktop/1366/768/48/99/QdMOeo.jpg" />
        <Content1 src="https://img.wallpapersafari.com/desktop/1366/768/48/99/QdMOeo.jpg" />
      </Container>
    </>
  );
}

export default Home;
