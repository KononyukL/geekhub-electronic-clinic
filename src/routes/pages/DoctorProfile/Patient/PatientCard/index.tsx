import React from 'react';
import CardPatient from 'components/view/profile/CardParient';
import { useParams } from 'react-router-dom';

const PatientCard = () => {
  const { cardId } = useParams();

  return <CardPatient cardId={cardId || 0} />;
};

export default PatientCard;
