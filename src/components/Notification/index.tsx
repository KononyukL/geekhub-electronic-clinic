import React, { useEffect, useState } from 'react';
import { Badge } from '@mui/material';
import { Icon } from './styled';
import IMGNotification from 'assets/icons/Notification.svg';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { allNotification, selectNotification } from 'store/notification';

const Notification = () => {
  const [message, setMessage] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { allNotification: currentAllNotification } = useAppSelector(selectNotification);

  useEffect(() => {
    dispatch(allNotification());
  }, [dispatch]);

  useEffect(() => {
    if (currentAllNotification && currentAllNotification.results?.length) {
      setMessage(currentAllNotification.results.length);
    }
  }, [currentAllNotification]);

  return (
    <Badge sx={{ marginRight: 4 }} badgeContent={message} color="secondary">
      <Icon src={IMGNotification} />
    </Badge>
  );
};

export default Notification;