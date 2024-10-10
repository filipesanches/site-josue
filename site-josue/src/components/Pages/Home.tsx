import {
  Card,
  CardMedia,
  CardActionArea,
  Box,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import HeaderImg from '../../assets/header-img-2.jpg';
import { styled } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Act from '../../assets/our_services/ACT-3-2.png';
import Cabinetry from '../../assets/our_services/Cabinetry-4-1.png';
import Drywall from '../../assets/our_services/Drywall-4-1.png';
import Metal from '../../assets/our_services/metal-framing-5-1.png';
import Painting from '../../assets/our_services/Painting-1-1.png';
import Wood from '../../assets/our_services/Wood-Framing-1-1.png';
import Flooring from '../../assets/our_services/Flooring-4-1.png';

const projects = [
  {
    name: 'Amazon Fulfillment Office and Restroon',
    location: 'North East, MD',
  },
  { name: 'The Pointe at Park Center', location: 'Alexandria, VA' },
  {
    name: 'Washington Suburban Sanitary Commission Cafetaria',
    location: 'Laurel, MD',
  },
  { name: 'Center / West Apartments', location: 'Baltimore, MD' },
  { name: 'Bent Tree Apartments', location: 'Centreville, VA' },
];

const ourProjects = [
  { name: 'METAL FRAMING ', image: Metal },
  { name: 'WOOD FRAMING ', image: Wood },
  { name: 'DRYWALL ', image: Drywall },
  { name: 'ACOUSTICAL CEILINGS ', image: Act },
  { name: 'PAINTING ', image: Painting },
  { name: 'FLOORING ', image: Flooring },
  { name: 'CABINETRY ', image: Cabinetry },
];

const CustomCard = ({ image, text }: { image: string; text: string }) => {
  const StyledCard = styled(Card)({
    backgroundColor: 'gray',
    maxWidth: 345,
    '&:hover': {
      backgroundColor: '#07b1c4',
    },
  });

  const StyledBox = styled(Box)({
    position: 'relative',
    padding: '16px',
    fontWeight: 'bold',
  });

  const formattedText = text.toLowerCase().replace(/\s+/g, '');

  return (
    <StyledCard>
      <Link
        to={`/services/#${formattedText}`}
        style={{ textDecoration: 'none' }}
      >
        <CardActionArea>
          <CardMedia component="img" height="200" image={image} alt={text} />
          <StyledBox>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexFlow: 'nowrap',
                color: '#fff',
              }}
            >
              {text}
              <ArrowForwardIosIcon sx={{ fontSize: '1.2rem' }} />
            </Typography>
          </StyledBox>
        </CardActionArea>
      </Link>
    </StyledCard>
  );
};

const Home = () => {
  return (
    <>
      <Box
        component={'div'}
        sx={{
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${HeaderImg})`,
          backgroundSize: 'cover', // Ajusta a imagem para cobrir todo o box
          backgroundPosition: 'center', // Centraliza a imagem
          height: '600px', // Define a altura como a altura da janela
          width: '100%', // Largura total
        }}
      >
        <Typography
          variant="h4"
          sx={{
            backgroundColor: 'rgba(0, 45, 102, 0.9)',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          RELATIONSHIPS ARE THE FIRST THING WE BUILD.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(135deg,#07b1c4 50%,#ffffff 50%)`,
          textAlign: 'right',
          padding: '20px',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          <Box
            component={'a'}
            href="tel:+12407584966"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            CALL TO US +1 (240) 758-4966
          </Box>
        </Typography>
      </Box>
      <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          PROJECTS
        </Typography>
        <Box
          sx={{
            borderBottom: '2px solid #00bcd4',
            width: '100px',
            margin: '0 auto 40px',
          }}
        />
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  maxWidth: { sm: '100%', md: '250px' },
                  margin: '0 auto',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.location}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          OUR PROJECTS
        </Typography>
        <Box
          sx={{
            borderBottom: '2px solid #00bcd4',
            width: '100px',
            margin: '0 auto 40px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {ourProjects.map((project, index) => (
            <CustomCard key={index} image={project.image} text={project.name} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
