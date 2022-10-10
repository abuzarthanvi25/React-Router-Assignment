import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Services from "../screens/Services";
import NotFound from "../screens/NotFound";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Navbar() {
  const pages = ["Home", "About", "Services", "Contact"]
  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Router>
      <AppBar sx={{backgroundColor:'#006d77'}} position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SportsEsportsIcon color="error" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GAME-IT
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <SportsEsportsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent:'center' } }}>
                  <Link to='/'>
                    <Button
                    sx={{ my: 2, color: 'white', display: 'block', fontSize:'19px', fontWeight:'bold',padding:'0px 20px 0px 20px' }}
                  >
                    Home
                  </Button>
                  </Link>
                  <Link to='about'>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block', fontSize:'19px', fontWeight:'bold',padding:'0px 20px 0px 20px' }}
                >
                  About
                </Button>
                  </Link>
                  <Link to='services'>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block', fontSize:'19px', fontWeight:'bold',padding:'0px 20px 0px 20px' }}
                >
                  Services
                </Button>
                  </Link>
                  <Link to='contact'>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block', fontSize:'19px', fontWeight:'bold',padding:'0px 20px 0px 20px' }}
                >
                  Contact
                </Button>
                  </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default Navbar;
