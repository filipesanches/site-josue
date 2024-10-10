import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Pagination from '../Pagination';
import Carousel from '../Carousel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const DynamicList = ({ items }) => {
  return (
    <List component="ol" disablePadding>
      {items.map((item, index) => (
        <ListItem key={index} component="li" disablePadding>
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <FiberManualRecordIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText primary={item.primary} />
        </ListItem>
      ))}
    </List>
  );
};

const BoxProjects = ({ images }: { images: string[] }) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexFlow: { xs: 'column nowrap', lg: 'row nowrap' },
      }}
    >
      <Box sx={{ marginRight: { md: 0, lg: '60px' } }}>
        <Carousel images={images} />
      </Box>
      <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
        <Typography variant="h5" component="div">
          Amazon Fulfillment Office and Restroom
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: 'gray',
            position: 'relative',
            marginBottom: '30px',
            paddingBottom: '20px',
            textAlign: { xs: 'center', lg: 'left' },
            '::after': {
              content: '""',
              display: 'block',
              width: { xs: '100%', lg: '250px' },
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
        <DynamicList
          items={[
            { primary: 'Project Name', secondary: 'Project Name' },
            { primary: 'Project Name', secondary: 'Project Name' },
            { primary: 'Project Name', secondary: 'Project Name' },
          ]}
        />
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
