import { Box } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';

function Phone_btn() {
  return (
    <Box
      component={Link}
      to="tel:+12407584966"
      sx={{
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        color: 'black',
        '&:hover': { color: '#fff' },
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#7ebec5',
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          transition: 'transform 0.3s ease',
          '&:hover': { color: '#fff', transform: 'scale(1.1)' },
        }}
      >
        <LocalPhoneIcon sx={{ fontSize: 50 }} />
      </Box>
    </Box>
  );
}

export default Phone_btn;
