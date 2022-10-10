import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Content1(props) {
  return (
    <div>
      <Box sx={{ marginTop: "60px" }}>
        <Grid container>
          <Grid item md="4">
            <img height="100%" width="95%" src={props.src} alt="" />
          </Grid>
          <Grid item md="8">
            <Typography sx={{ fontSize: "20px", color: "white" }} variant="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo totam illo libero, odit ipsam dicta saepe voluptatem
              voluptatibus provident eveniet vero reprehenderit atque ad
              deserunt eius accusantium aliquid, iusto dolorem qui optio culpa
              molestias modi dignissimos. Molestias voluptatibus, nisi vitae
              natus neque excepturi iure commodi, dolorum molestiae sunt facilis
              id eligendi sit ratione provident, odit fuga quibusdam totam!
              Sunt, nulla impedit! Nemo eos aut, maxime laudantium error eveniet
              neque corrupti ex animi at sequi quisquam, suscipit cum et facere
              temporibus eum consequuntur, quod iusto ea similique voluptatem.
              Incidunt, rerum accusantium. A totam eius earum inventore, ab
              libero! Doloribus cum natus ipsam iusto? Itaque quos totam
              assumenda saepe quibusdam, nam ut ratione, voluptatum recusandae
              dicta sequi porro aliquid quidem rerum perferendis earum illo
              reiciendis vel eligendi repudiandae dolor animi. Inventore sint
              voluptatem culpa, itaque iure deleniti aliquid sunt doloribus,
              neque pariatur repellendus ullam temporibus repudiandae quis
              corporis ad laboriosam, consequatur cupiditate eos beatae repellat
              aperiam minima asperiores! Possimus quidem a rerum?
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Content1;
