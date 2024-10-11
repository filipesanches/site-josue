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
import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from '../data/data_itens_nav';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(window);

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

  const drawerContent = useMemo(
    () => (
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
    ),
    [location] // Apenas re-renderiza quando a localização muda
  );

  // Adicionando o efeito de rolagem para alterar o estado da barra de navegação
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = scrollRef.current.scrollY || window.scrollY;
      setScrolled(scrollY > 100);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    scrollRef.current.addEventListener("scroll", onScroll);
    return () => {
      scrollRef.current.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "#fff" : "#f5f5f5",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
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
                width: { xs: scrolled ? "60px" : "80px", sm: scrolled ? "90px" : "100px", md: scrolled ? "100px" : "120px" },
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

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        aria-label="navigation menu"
        aria-expanded={drawerOpen}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
