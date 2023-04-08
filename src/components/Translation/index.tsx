import React from 'react';
import { Box } from '@mui/material';
import { Button, ButtonGroup } from './styled';
import { languages } from '../../i18n';
import i18n from 'i18next';

const Translation = () => {
  const [en, uk] = languages;
  const handleLangChange = React.useCallback(
    (lang: string) => async () => {
      await i18n.changeLanguage(lang);
    },
    [i18n]
  );

  const buttonVariant = (lang: string) => {
    if (i18n.language !== lang) {
      return 'outlined';
    }
  };

  return (
    <Box>
      <ButtonGroup variant="contained">
        <Button onClick={handleLangChange(en)} variant={buttonVariant(en)} color="secondary">
          Eng
        </Button>
        <Button onClick={handleLangChange(uk)} variant={buttonVariant(uk)} color="secondary">
          Укр
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Translation;
