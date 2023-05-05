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
  const iconRef = useRef<HTMLImageElement>(null);

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
  }, [currentAllNotification?.results]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, iconRef]);

  const handleLinkToFeedback = (notification: TNotification) => {
    dispatch(allNotification());
    dispatch(
      statusNotification({
        id: notification.id,
        title: notification.title,
        text: notification.text,
        is_read: notification.is_read
      })
    );
  };

  const updateNotification = () => {
    dispatch(allNotification());
    setShowNotifications(!showNotifications);
  };

  return (
    <Box sx={{ display: 'inline-block' }}>
      <Badge sx={{ marginRight: 4 }} badgeContent={message} color="secondary">
        <Icon
          ref={iconRef}
          src={IMGNotification}
          alt="Notification"
          title="Notification"
          onClick={updateNotification}
        />
      </Badge>
      {showNotifications && (
        <Box sx={{ position: 'absolute' }} ref={modalRef}>
          <ModalMessage>
            {currentAllNotification &&
              currentAllNotification.results &&
              currentAllNotification.results
                .filter((notification) => !notification.is_read)
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
