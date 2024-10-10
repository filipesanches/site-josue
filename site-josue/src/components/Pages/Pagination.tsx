import { Box, Typography } from '@mui/material';
import BgTitle from '../../assets/pagination/bg_titulos_pages.png';
import { Link } from 'react-router-dom';

function Pagination({ text }: { text: string }) {
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '250px',
        backgroundImage: `url(${BgTitle})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
      }}
    >
      <Typography component={'div'} variant="h3" sx={{ fontWeight: 'bold' }}>
        {text}
      </Typography>
      <Typography
        component={'div'}
        variant="h6"
        sx={{
          color: '#fff',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          HOME {'>'}{' '}
        </Link>
        {text}
      </Typography>
    </Box>
  );
}

export default Pagination;
