import Visit from '../Visit';
import React, { useState } from 'react';
import { visitPlanned } from './mockData';
import { ModalProfile } from 'components/Modal';
import { useTranslation } from 'react-i18next';
import { Box, BoxInfo, Button } from './styled';

const PlannedVisits = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      {visitPlanned.map((item, i) => (
        <Box key={i}>
          <BoxInfo>
            <Visit
              name={item.name}
              positionDoctor={item.positionDoctor}
              date={item.date}
              time={item.time}
              reception={item.reception}
            />
            <Button variant="outlined" onClick={handleClick}>
              {t('buttons.cancel')}
            </Button>
            <ModalProfile open={openModal} setOpen={setOpenModal} />
          </BoxInfo>
        </Box>
      ))}
    </>
  );
};

export default PlannedVisits;
