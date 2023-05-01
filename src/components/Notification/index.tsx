import React, { useEffect, useRef, useState } from 'react';
import { Badge, Box } from '@mui/material';
import { Icon, ModalMessage, Title, LinkButton, Wrapper } from './styled';
import IMGNotification from 'assets/icons/Notification.svg';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { allNotification, selectNotification, statusNotification } from 'store/notification';

type TNotification = {
  id: number;
  title: string;
  text: string;
  is_read: boolean;
};

const Notification = () => {
  const [message, setMessage] = useState<number>(0);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { allNotification: currentAllNotification } = useAppSelector(selectNotification);
  const modalRef = useRef<HTMLDivElement>(null);

  console.log(currentAllNotification);

  useEffect(() => {
    dispatch(allNotification());
  }, [dispatch]);

  useEffect(() => {
    if (currentAllNotification && currentAllNotification.results?.length) {
      const filterMessage = currentAllNotification.results.filter(
        (notification) => notification.is_read === false
      );
      setMessage(filterMessage.length);
    }
  }, [currentAllNotification]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  const handleLinkToFeedback = (notification: TNotification) => {
    dispatch(
      statusNotification({
        id: notification.id,
        title: notification.title,
        text: notification.text,
        is_read: notification.is_read
      })
    );
  };

  return (
    <Box sx={{ display: 'inline-block' }}>
      <Badge sx={{ marginRight: 4 }} badgeContent={message} color="secondary">
        <Icon
          src={IMGNotification}
          alt="Notification"
          title="Notification"
          onClick={() => setShowNotifications(!showNotifications)}
        />
      </Badge>
      {showNotifications && (
        <Box sx={{ position: 'absolute' }} ref={modalRef}>
          <ModalMessage>
            {currentAllNotification &&
              currentAllNotification.results
                .filter((notification) => notification.is_read === false)
                .map((notification) => (
                  <Wrapper key={notification.id}>
                    <Title>{notification.text}</Title>
                    <LinkButton
                      to={`/feedback/${notification.doctor_id}/${notification.appointment}`}
                      onClick={() => {
                        handleLinkToFeedback(notification);
                        setShowNotifications(false);
                      }}>
                      {notification.title}
                    </LinkButton>
                  </Wrapper>
                ))}
          </ModalMessage>
        </Box>
      )}
    </Box>
  );
};

export default Notification;
