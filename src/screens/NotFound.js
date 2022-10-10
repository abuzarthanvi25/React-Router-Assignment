import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "85vh",
      }}
    >
      <Typography
        sx={{ textAlign: "center", color: "red" }}
        variant="h1"
        gutterBottom
      >
        ERROR 404 NOT FOUND
      </Typography>
    </Box>
  );
}

export default NotFound;
