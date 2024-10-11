import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Carousel from '../Carousel';
import { servicesData } from '../../data/data_services';
import Pagination from '../Pagination';

const ServiceCard = React.forwardRef(
  (
    {
      name,
      text,
      images,
      bgColor,
    }: { name: string; text: string; images: string[]; bgColor: boolean },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        id={name.toLowerCase().replace(/\s+/g, '')}
        component={'div'}
        sx={{
          scrollMarginTop: '160px', // Ajuste a altura do seu menu fixo
          backgroundColor: bgColor ? '#f7f7f7' : 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexFlow: {
            xs: 'column nowrap',
            md: 'column nowrap',
            lg: 'row nowrap',
          },
          padding: '30px 0',
        }}
      >
        <Box sx={{ padding: { xs: '0', md: '0 50px 0 0' }, maxWidth: '400px' }}>
          <Typography
            variant="h4"
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
                width: { xs: '100%', md: '300px' },
                borderBottom: '4px solid #7ebec5',
                position: 'absolute',
                bottom: 0,
                left: 0,
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            {text}
          </Typography>
        </Box>
        <Box sx={{ mt: { xs: '30px', md: '30px' } }}>
          <Carousel images={images} />
        </Box>
      </Box>
    );
  }
);

const Services = () => {
  const location = useLocation();
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    console.log('Location hash:', location.hash); // Para depuração

    if (location.hash) {
      const index = servicesData.findIndex(
        (service) =>
          service.name.toLowerCase().replace(/\s+/g, '') ===
          location.hash.slice(1)
      );
      if (index !== -1 && serviceRefs.current[index]) {
        serviceRefs.current[index].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Pagination text="SERVICES" />
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          name={service.name}
          text={service.text}
          images={service.images}
          bgColor={index % 2 === 0}
          ref={(el: HTMLDivElement | null) => (serviceRefs.current[index] = el)} // Armazena a referência
        />
      ))}
    </>
  );
};

export default Services;
