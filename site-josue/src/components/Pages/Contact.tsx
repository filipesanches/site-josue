import { Box, Typography } from '@mui/material';
import Pagination from '../Pagination';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import BoxContent from '../BoxContent';

const CardContact = ({
  title,
  icon1,
  icon2,
  textLink,
  text,
}: {
  title: string;
  icon1: JSX.Element;
  icon2: JSX.Element;
  textLink: string;
  text: string;
}) => {
  return (
    <>
      <Box
        component={'div'}
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          margin: '0 30px',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <Box
            sx={{
              color: '#fff',
              backgroundColor: '#00bcd4',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            {icon1}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginBottom: '20px' }}
          >
            {title}
          </Typography>
          <Box
            component={Link}
            target="_blank"
            to={textLink}
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'black',
              '&:hover': { color: '#00bcd4' },
            }}
          >
            {icon2}
            <Typography variant="body1" component="div">
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Pagination text="CONTACT US" />

      <BoxContent title="INFO" bgColor="#f7f7f7">
        <CardContact
          title="Address"
          icon1={<HomeIcon sx={{ fontSize: '60px' }} />}
          icon2={<LocationOnIcon sx={{ marginRight: '10px' }} />}
          textLink="https://www.google.com/maps/place/Lanner+Pl,+South+Laurel,+MD+20708,+EUA/@39.0528897,-76.8514119,17z/data=!4m15!1m8!3m7!1s0x89b7c2c0a0627039:0x45756bc0f3ae17e7!2sLanner+Pl,+South+Laurel,+MD+20708,+EUA!3b1!8m2!3d39.0528897!4d-76.8488316!16s%2Fg%2F1thp8wmg!3m5!1s0x89b7c2c0a0627039:0x45756bc0f3ae17e7!8m2!3d39.0528897!4d-76.8488316!16s%2Fg%2F1thp8wmg?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D"
          text="12002 Lanner Pl, Laurel, MD 20707"
        />
        <CardContact
          title="PHONE"
          icon1={<SmartphoneIcon sx={{ fontSize: '60px' }} />}
          icon2={<CallIcon sx={{ marginRight: '10px' }} />}
          textLink="tel:+1-240-758-4966"
          text="1-240-758-4966"
        />
        <CardContact
          title="E-MAIL"
          icon1={<SendIcon sx={{ fontSize: '60px' }} />}
          icon2={<EmailIcon sx={{ marginRight: '10px' }} />}
          textLink="mailto:info@elitecontracting-llc.com"
          text="info@elitecontracting-llc.com"
        />
      </BoxContent>
      <Box sx={{ padding: '50px', width: '100%' }}></Box>
    </>
  );
};

export default Contact;
