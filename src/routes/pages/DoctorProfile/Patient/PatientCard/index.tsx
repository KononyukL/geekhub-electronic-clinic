import React from 'react';
import CardPatient from 'components/view/profile/CardParient';
import { useParams } from 'react-router-dom';

const PatientCard = () => {
  const { userId, cardId } = useParams();

  return <CardPatient userId={userId || 0} cardId={cardId || 0} />;
};

export default PatientCard;
