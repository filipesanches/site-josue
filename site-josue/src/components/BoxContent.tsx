import { Box, Typography } from '@mui/material';

const BoxContent = ({
  title,
  bgColor,
  children,
}: {
  title: string;
  bgColor?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: bgColor }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <Box
          sx={{
            borderBottom: '2px solid #00bcd4',
            width: '100px',
            margin: '0 auto 40px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexFlow: {
              xs: 'column nowrap',
              md: 'row nowrap',
            },
            justifyContent: 'space-around',
            margin: '50px auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default BoxContent;
