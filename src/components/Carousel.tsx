import { useState, useCallback } from 'react';
import { Box, Button, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const Carousel = ({ images }: { images: string[] }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  }, [maxSteps]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  }, []);

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      {images[activeStep] && (
        <Box
          component="img"
          src={images[activeStep]}
          alt={`image-${activeStep}`}
          sx={{ width: '100%', height: 'auto' }}
          
        />
      )}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{backgroundColor: 'transparent'}}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Previous
          </Button>
        }
      />
    </Box>
  );
};

export default Carousel;
