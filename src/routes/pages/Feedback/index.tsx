import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
  Container,
  Wrapper,
  Comment,
  DoctorRation,
  Button,
  Title,
  TitleRating,
  Doctor,
  Rating
} from './styled';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { doctor, selectDoctors } from 'store/doctors';

const Feedback: FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [feedbackText, setFeedBackText] = useState<string>('');
  const { doctorId } = useParams();
  const dispatch = useAppDispatch();
  const { doctor: currentDoctor } = useAppSelector(selectDoctors);

  useEffect(() => {
    dispatch(doctor({ doctorId: doctorId as string }));
  }, [doctorId, dispatch]);

  const onChangeText = (text: string) => {
    setFeedBackText(text);
  };

  const handleRatingChange = (event: React.ChangeEvent<{}>, value: number | null) => {
    if (value !== null) {
      setRating(value);
    }
  };

  const onSubmit = async () => {
    console.log({
      title: rating,
      text: feedbackText
    });
  };

  return (
    <Container>
      <Wrapper>
        <DoctorRation sx={{ margin: '32px 32px 26px 32px' }}>
          <Box>
            <Title>Відгук на візит до:</Title>
            <Doctor>
              {currentDoctor.last_name} {currentDoctor.first_name.slice(0, 1)}.{' '}
              {currentDoctor.patronim_name.slice(0, 1)}.
            </Doctor>
          </Box>
          <Box>
            <TitleRating>Загальна оцінка</TitleRating>
            <Rating name="size-medium" value={rating} size="large" onChange={handleRatingChange} />
          </Box>
        </DoctorRation>
        <Box sx={{ textAlign: 'center' }}>
          <Comment
            maxLength={400}
            onChange={(e) => onChangeText(e.target.value)}
            placeholder="Залиште ваш коментар"
          />
        </Box>
        <Button disabled={rating === 0} onClick={onSubmit}>
          Залишити відгук
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Feedback;
