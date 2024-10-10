import { Box } from '@mui/material';
import Pagination from '../Pagination';
import IframeForm from '../IframeForm';

const Subcontractor = () => {
  return (
    <>
      <Pagination text="SUBCONTRACTORS" />
      <Box sx={{ padding: '50px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <IframeForm
          height="1500px"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdtqWGxFC8xbOrlEM-ovQJlFoP1jhzvvf_EoFAhWCeCvd1Nqw/viewform?usp=sf_link"
        />
      </Box>
    </>
  );
};

export default Subcontractor;
