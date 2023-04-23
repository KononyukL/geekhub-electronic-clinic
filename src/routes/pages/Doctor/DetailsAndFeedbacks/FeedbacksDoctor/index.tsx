import React, { FC, useEffect, useState } from 'react';
import {
  Wrapper,
  Feedbacks,
  StyledBox,
  NameDoctor,
  Feedback,
  PaginationWrapper,
  HorizontalLine,
  Rating
} from './styled';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { feedbacks } from 'store/doctors/thunks';
import { Box, Pagination } from '@mui/material';
import { selectDoctors } from 'store/doctors';

interface IFeedbacksDoctor {
  doctorId: number;
}

const FeedbacksDoctor: FC<IFeedbacksDoctor> = ({ doctorId }) => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { feedbacks: currentFeedbacks } = useAppSelector(selectDoctors);

  useEffect(() => {
    dispatch(feedbacks({ doctorId: doctorId }));
  }, [dispatch]);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(feedbacks.length / itemsPerPage);

  const getCurrentDoctors = () => {
    if (currentFeedbacks && currentFeedbacks.results?.length) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return currentFeedbacks.results.slice(startIndex, endIndex);
    }
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Wrapper>
        <HorizontalLine />
        {currentFeedbacks.results.length > 0 &&
          getCurrentDoctors()?.map((feedback, index) => (
            <Feedbacks key={index}>
              <StyledBox>
                <Box>
                  <NameDoctor>
                    {feedback.patient_lastname} {feedback.patient_firstname}
                  </NameDoctor>
                  <Box>
                    <Rating
                      readOnly
                      name="size-medium"
                      defaultValue={parseInt(feedback.review_rating)}
                    />
                  </Box>
                </Box>
              </StyledBox>
              <Feedback>{feedback.review_text}</Feedback>
              <HorizontalLine />
            </Feedbacks>
          ))}
      </Wrapper>
      <PaginationWrapper>
        {currentFeedbacks && currentFeedbacks.results.length >= 3 && (
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        )}
      </PaginationWrapper>
    </Box>
  );
};

export default FeedbacksDoctor;
