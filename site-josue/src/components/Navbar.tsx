import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../assets/logo-OK.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Subcontractors", path: "/subcontractors" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            component={Link}
            to={item.path}
            sx={{
              color: isActive(item.path) ? "primary.main" : "GrayText",
              fontWeight: isActive(item.path) ? "bold" : "normal",
            }}
            key={item.label}
            onClick={() => console.log(`${item.label} clicado`)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Adicionando o efeito de rolagem para alterar o estado da barra de navegação
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": { transform: "scale(1.1)" },
                width: { xs: "70px", sm: scrolled ? "90px" : "100px", md: scrolled ? "100px" : "120px" },
                height: "auto",
                display: "block",
                margin: "10px",
              }}
            />
          </Link>

          <Box sx={{ display: { xs: "none", md: "block" }, ml: "auto" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => console.log(`${item.label} clicado`)}
                sx={{
                  color: isActive(item.path) ? "primary.main" : "GrayText",
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            edge="end"
            color="primary"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
