import React from "react";
import Container from "@mui/material/Container";
import Content1 from "../components/Content1";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <Typography
          sx={{ textAlign: "center", color: "#fb8b24" }}
          variant="h1"
          gutterBottom
        >
          ABOUT US
        </Typography>
        <Content1 src="https://wallpaperaccess.com/full/1657033.jpg" />
      </Container>
    </>
  );
}

export default About;
