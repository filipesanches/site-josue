import { Box, Typography } from '@mui/material';
import Pagination from '../Pagination';
import BgImage from '../../assets/bg_home_2_color.png';
const About = () => {
  return (
    <>
      <Pagination text="ABOUT US" />
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          padding: '50px',
          background: `url(${BgImage}) no-repeat center/cover`,
          backgroundColor: '#fafafa',
        }}
      >
        <Typography variant="h4" component="div" sx={{ color: 'gray' }}>
          Elite Contracting LLC
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: 'gray',
          }}
        >
          Since 2016
        </Typography>
        <Box
          sx={{
            borderBottom: '4px solid #7ebec5',
            maxWidth: '300px',
          }}
        />
        <Typography
          variant="inherit"
          component="div"
          sx={{
            color: 'gray',
            mt: '30px',
            maxWidth: '600px',
          }}
        >
          {`Elite Contracting is a locally family-owned and operates out of the
          DMV area. A fully integrated service provider highly experienced in
          commercial division 6 and division 9 work, we provide services such as
          light gauge metal framing, rough carpentry, framing and blocking. In
          addition, we also specialize in gypsum board assemblies, batt
          insulation, acoustical ceiling systems, interior and exterior
          painting, and cabinetry. Founded in 2016 by Willian Sales, CEO, Elite
          Contracting has grown to encompass an integrated family of brands
          designed to complement each other’s specialized capabilities. Licensed
          in Maryland and D.C., we have completed a vast array of projects for
          multifamily, educational, retail and commercial fit-outs. Our team
          offers several services, including design, construction, engineering,
          and operational improvements. This enables us to create one-of-a-kind
          solutions at the highest levels of customization, while delivering
          precision and customized projects. Our history shows our determination
          to successfully complete jobs for some of the country’s most
          sophisticated organizations. We see every project as an opportunity to
          build meaningful relationships, and we do so by giving the customer
          everything they need—and just a bit more. To us, there is nothing more
          rewarding than fulfilling our purpose: to make a difference in
          people’s lives by delivering great projects while creating
          unforgettable customer experiences.`}
        </Typography>
      </Box>
    </>
  );
};

export default About;
