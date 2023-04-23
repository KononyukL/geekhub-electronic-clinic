import React from 'react';

import CardPatient from 'components/view/profile/CardParient';
import { useAppSelector } from 'store/hooks';
import { selectProfile } from 'store/profile';

const MyCard = () => {
  const { profile } = useAppSelector(selectProfile);

  return <CardPatient cardId={profile?.card_id || 0} />;
};

export default MyCard;
