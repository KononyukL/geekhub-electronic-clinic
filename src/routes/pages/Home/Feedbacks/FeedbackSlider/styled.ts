import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #000000 !important;
  }

  .slick-list {
    margin: 0 -12px !important;
  }

  .slick-slide > div {
    padding: 0 12px !important;
  }
`;
export const WrapFeedback = styled.div`
  border-radius: 12px;
  background: #f9f9f9;
  padding: 20px;
  min-height: 250px;
`;

export const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.p``;
export const Rating = styled.p``;

export const FeedbackMain = styled.div``;
