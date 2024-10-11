import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Logo from "../assets/logo-OK.png";
import StechCo from "../assets/S-TechCo_MBE_DBE_SBE_certified-removebg-preview-1.png";
import SWaMcertf from "../assets/SWaMcertif-1024x397-removebg-preview.png";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Subcontractors", path: "/subcontractors" },
  { label: "Contact Us", path: "/contact" },
];

const GridGrow = ({ children }: {children: React.ReactNode}) => {
  return <Grid size="grow" sx={{ mb: { xs: "10px" } }}>{children}</Grid>;
};

const Footer = () => {
  const location = useLocation();
  // Verifica se a rota atual é a mesma do link
  const isActive = (item: { path: string }) => location.pathname === item.path;

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "rgba(12,113,195,0.23)", padding: "20px 0" }}>
      <Grid
        container
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <GridGrow>
          <Box
            component={"img"}
            src={Logo}
            alt={"Logo"}
            width={{
              xs: "100px",
              sm: "130px",
              md: "150px",
              lg: "170px",
              xl: "200px",
            }}
            margin={"10px"}
          ></Box>
        </GridGrow>
        <GridGrow >
          <Box
            component={"div"}
            display={"flex"}
            flexDirection={{ xs: "row", md: "column" }}
          >
            <Box
              component={"img"}
              src={StechCo}
              alt={"Logo"}
              width={{
                xs: "100px",
                sm: "130px",
                md: "150px",
                lg: "170px",
                xl: "200px",
              }}
              margin={"10px"}
            ></Box>
            <Box
              component={"img"}
              src={SWaMcertf}
              alt={"Logo"}
              width={{
                xs: "100px",
                sm: "130px",
                md: "150px",
                lg: "170px",
                xl: "200px",
              }}
              margin={"10px"}
            ></Box>
          </Box>
        </GridGrow>
        <GridGrow>
          <Box component={"div"}>
            <Typography variant="h6" gutterBottom>
              Licensing Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              MD License: MHIC#133283
            </Typography>
            <Typography variant="body1" gutterBottom>
              DC License: DCRA#410518000469
            </Typography>
          </Box>
        </GridGrow>
        <GridGrow>
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          {navItems.map((item) => (
            <Grid key={item.label} component="div">
              <Link
                to={item.path}
                style={{
                  color: isActive(item) ? "#fff" : "inherit", // Altera a cor do texto se estiver ativo
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Link>
            </Grid>
          ))}
        </GridGrow>
        <GridGrow>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <PhoneIcon />
              <Typography variant="body1">+1 (240) 758-4966</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <LocationOnIcon />
              <Typography variant="body1">
                12002 Lanner Pl, Laurel MD 20708
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <EmailIcon />
              <Typography variant="body1">
                info@elitecontracting-llc.com
              </Typography>
            </Box>
          </Box>
        </GridGrow>
      </Grid>
    </Box>
  );
};

export default Footer;
