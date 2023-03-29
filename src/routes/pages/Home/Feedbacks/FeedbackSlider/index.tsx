import React from 'react';
import {
  FeedbackHeader,
  FeedbackMain,
  Rating,
  UserName,
  WrapFeedback,
  StyledSlider
} from './styled';

interface IFeedback {
  id: number;
  name: string;
  rating: number;
  feedback: string;
}
const feedbacks: IFeedback[] = [
  { id: 1, name: 'John', rating: 4, feedback: 'Great product, highly recommend it!' },
  { id: 2, name: 'Sarah', rating: 5, feedback: 'Amazing customer service, very impressed!' },
  { id: 3, name: 'Tom', rating: 3, feedback: 'Good product, but could be better.' },
  {
    id: 4,
    name: 'Jessica',
    rating: 2,
    feedback: "Disappointed with the quality, wouldn't buy again."
  },
  { id: 5, name: 'David', rating: 4, feedback: 'Overall satisfied with the product.' },
  { id: 6, name: 'Emily', rating: 5, feedback: "Best product I've ever used!" },
  { id: 7, name: 'Mark', rating: 2, feedback: 'Not impressed with the customer service.' },
  { id: 8, name: 'Olivia', rating: 4, feedback: 'Great value for money, would buy again.' },
  { id: 9, name: 'Luke', rating: 3, feedback: 'Decent product, but could use some improvements.' },
  { id: 10, name: 'Grace', rating: 5, feedback: 'Exceptional experience, highly recommend it!' }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  useTransform: false
};

const FeedbackSlider = () => {
  return (
    <StyledSlider {...settings}>
      {feedbacks.map((feedback) => (
        <WrapFeedback key={feedback.id}>
          <FeedbackHeader>
            <UserName> {feedback.name}</UserName>
            <Rating>{feedback.rating}</Rating>
          </FeedbackHeader>
          <FeedbackMain>{feedback.feedback}</FeedbackMain>
        </WrapFeedback>
      ))}
    </StyledSlider>
  );
};

export default FeedbackSlider;
