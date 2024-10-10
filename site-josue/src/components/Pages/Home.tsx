import {
  Card,
  CardMedia,
  CardActionArea,
  Box,
  Typography,
} from '@mui/material';
import HeaderImg from '../../assets/header-img-2.jpg';
import { styled } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import BoxContent from '../BoxContent';
import { ourProjects, projects } from '../../data/data_home';

const CustomCard = ({ image, text }: { image: string; text: string }) => {
  const StyledCard = styled(Card)({
    backgroundColor: 'gray',
    margin: '10px',
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
            component={Link}
            to="tel:+12407584966"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            CALL TO US +1 (240) 758-4966
          </Box>
        </Typography>
      </Box>
      
      <BoxContent title="PROJECTS">
        {projects.map((project, index) => (
          <Box key={index}>
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: { sm: '100%', md: '250px' },
                margin: '20px auto',
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </BoxContent>

      <BoxContent title="OUR SERVICES" bgColor="#f7f7f7">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {ourProjects.map((service, index) => (
            <CustomCard key={index} image={service.image} text={service.name} />
          ))}
        </Box>
      </BoxContent>
    </>
  );
};

export default Home;
