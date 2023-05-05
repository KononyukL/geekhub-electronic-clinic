import React, { FC, useEffect } from 'react';
import {
  Feedbacks,
  StyledBox,
  NameDoctor,
  Feedback,
  PaginationWrapper,
  HorizontalLine,
  Rating,
  Date
} from './styled';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { feedbacks } from 'store/doctors/thunks';
import { Box, Pagination } from '@mui/material';
import { selectDoctors } from 'store/doctors';
import { useSearchParams } from 'react-router-dom';
import { FEEDBACKS_PER_PAGE } from '../index';

interface IFeedbacksDoctor {
  doctorId: number;
  onSetItemsCount: (count: number) => void;
  page: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  pageCount: number;
}

const FeedbacksDoctor: FC<IFeedbacksDoctor> = ({
  doctorId,
  onSetItemsCount,
  page,
  handleChangePage,
  pageCount
}) => {
  const dispatch = useAppDispatch();
  const { feedbacks: currentFeedbacks } = useAppSelector(selectDoctors);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(feedbacks({ doctorId: doctorId, page: searchParams.get('page') || 1 }));
  }, [doctorId, searchParams, dispatch]);

  useEffect(() => {
    if (currentFeedbacks) {
      onSetItemsCount(currentFeedbacks.count);
    }
  }, [currentFeedbacks]);

  return (
    <Box>
      <Box>
        <HorizontalLine />
        {currentFeedbacks.results.length > 0 &&
          currentFeedbacks?.results?.map((feedback, index) => (
            <Feedbacks key={index}>
              <StyledBox>
                <Box>
                  <NameDoctor>
                    {feedback.patient_lastname} {feedback.patient_firstname}
                  </NameDoctor>
                  <Box>
                    <Rating readOnly name="size-medium" value={parseInt(feedback.review_rating)} />
                  </Box>
                </Box>
                <Date>{feedback.created_at}</Date>
              </StyledBox>
              <Feedback>{feedback.review_text}</Feedback>
              <HorizontalLine />
            </Feedbacks>
          ))}
      </Box>
      <PaginationWrapper>
        {currentFeedbacks && currentFeedbacks.count >= FEEDBACKS_PER_PAGE && (
          <Pagination
            page={page}
            count={pageCount}
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
