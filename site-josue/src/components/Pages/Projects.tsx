import { Box, Typography } from '@mui/material';
import Pagination from '../Pagination';
import Carousel from '../Carousel';

const BoxProjects = ({ images }: { images: string[] }) => {
  return (
    <Box component="div" sx={{ display: 'flex', flexFlow: {md: 'column nowrap', lg: 'row nowrap'} }}>
      <Box sx={{ marginRight: { md: 0, lg: '60px' } }}>
        <Carousel images={images} />
      </Box>
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h5" component="div">
          Amazon Fulfillment Office and Restroom
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'gray',
            position: 'relative',
            marginBottom: '50px',
            paddingBottom: '20px',
            textAlign: { xs: 'center', md: 'left' },
            '::after': {
              content: '""',
              display: 'block',
              width: '300px',
              borderBottom: '4px solid #7ebec5',
              position: 'absolute',
              bottom: 0,
              left: 0,
            },
          }}
        >
          {' '}
          Twsad
        </Typography>
      </Box>
    </Box>
  );
};

const Projects = () => {
  return (
    <>
      <Pagination text="OUR PROJECTS" />
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
        }}
      >
        <BoxProjects images={[]} />
      </Box>
    </>
  );
};

export default Projects;
