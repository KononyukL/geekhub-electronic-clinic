import React, { useRef } from 'react';
import { StyledSlider, BoxFeedback, Review, Box, BoxName } from './styled';
import { feedbacks } from './mockData';
import { Avatar, IconButton, Rating, Typography } from '@mui/material';
import { theme } from 'theme';
import Slider from 'react-slick';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowLRight } from 'assets/icons/arrow-right.svg';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false
};

const FeedbackSlider = () => {
  const ref = useRef<Slider | null>(null);

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };
  return (
    <Box sx={{ maxWidth: 936, margin: '0 auto' }}>
      <IconButton onClick={onPrev} sx={{ marginBottom: 15 }}>
        <ArrowLeft />
      </IconButton>
      <StyledSlider ref={ref} {...settings}>
        {feedbacks.map((feedback) => (
          <BoxFeedback key={feedback.id}>
            <Review>{feedback.feedback}</Review>
            <Box>
              <Avatar alt="Remy Sharp" src={feedback.img} />

              <BoxName>
                <Typography sx={{ color: theme.palette.primary.contrastText }}>
                  {feedback.name}
                </Typography>
                <Rating value={feedback.value} readOnly />
              </BoxName>
            </Box>
          </BoxFeedback>
        ))}
      </StyledSlider>
      <IconButton onClick={onNext} sx={{ marginBottom: 15 }}>
        <ArrowLRight />
      </IconButton>
    </Box>
  );
};

export default FeedbackSlider;
