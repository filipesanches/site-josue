import Box from '@mui/material/Box';
import ContactForm from '../ContactForm';
import Pagination from '../Pagination';

const Subcontractor = () => {
  return (
    <>
      <Pagination text="SUBCONTRACTORS" />
      <Box
        sx={{
          padding: '50px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default Subcontractor;
