import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function Contact() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
        <Typography
          sx={{ textAlign: "center", color: "#fb8b24" }}
          variant="h1"
          gutterBottom
        >
          CONTACT US
        </Typography>

        <Paper sx={{ padding: "20px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "20px 0px 20px 0px",
            }}
          >
            <TextField
              id="outlined-basic"
              sx={{ width: "47%", fontSize: "22px" }}
              label="Name"
              type="text"
              variant="outlined"
            />
            <TextField
              sx={{ width: "47%", fontSize: "22px" }}
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
            />
          </Box>
          <TextField
            id="filled-multiline-static"
            label="COMMENTS"
            multiline
            sx={{ width: "100%", fontSize: "22px" }}
            rows={10}
            placeholder="Enter your comments here..."
            variant="filled"
          />
        </Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Button
            sx={{
              padding: "10px 40px 10px 40px",
              fontSize: "20px",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
