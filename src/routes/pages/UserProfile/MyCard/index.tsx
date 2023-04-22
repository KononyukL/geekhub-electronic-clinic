import React from 'react';

import CardPatient from 'components/view/profile/CardParient';
import { useAppSelector } from 'store/hooks';
import { selectProfile } from 'store/profile';
import { getAuthData } from 'config/helpers';

const MyCard = () => {
  const { profile } = useAppSelector(selectProfile);
  const { id } = getAuthData();

  return <CardPatient cardId={profile?.card_id || 0} userId={id || 0} />;
};

export default MyCard;
