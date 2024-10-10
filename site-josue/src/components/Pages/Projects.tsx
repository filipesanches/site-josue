import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Pagination from '../Pagination';
import Carousel from '../Carousel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { dataProjects } from '../../data/data_projects';

const DynamicList = ({
  items,
}: {
  items: { primary: string; secondary: string }[];
}) => {
  return (
    <List component="ol" disablePadding sx={{ textAlign: 'center' }}>
      {items.map((item, index) => (
        <ListItem key={index} component="li" disablePadding>
          <ListItemIcon sx={{ minWidth: '20px', color: '#e4e4e4' }}>
            <FiberManualRecordIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Box>
                <Box
                  component="span"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: 'gray',
                  }}
                >
                  {item.primary}
                </Box>{' '}
                <Box component="span" sx={{ fontSize: '14px' }}>
                  {item.secondary}
                </Box>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

const BoxProjects = ({
  images,
  textTitle,
  textDescription,
  textList,
}: {
  images: string[];
  textTitle: string;
  textDescription: string;
  textList: { primary: string; secondary: string }[];
}) => {
  return (
    <Box
      component="div"
      sx={{
        alignItems: 'center',
        margin: '50px 0',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },

      }}
    >
      <Box sx={{ marginRight: { md: 0, lg: '60px' }}}>
        <Carousel images={images} />
      </Box>
      <Box sx={{ textAlign: { xs: 'center', lg: 'left' }, width: { xs: '100%', lg: '500px' }, padding: '20px' }}>
        <Typography variant="h5" component="div">
          {textTitle}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: 'gray',
            position: 'relative',
            marginBottom: '20px',
            paddingBottom: '10px',
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
          {textDescription}
        </Typography>
        <DynamicList items={textList} />
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
        {dataProjects.map((project, index) => (
          <BoxProjects
            key={index}
            images={project.images}
            textTitle={project.textTitle}
            textDescription={project.textDescription}
            textList={project.textList}
          />
        ))}
      </Box>
    </>
  );
};

export default Projects;
