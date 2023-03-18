import React from 'react';
import { ContainerHome, Title } from './styled';

import { useTranslation } from 'react-i18next';
import { languages } from '../../i18n';
import i18n from 'i18next';

const Home = () => {
  const { t } = useTranslation();

  const handleLangChange = React.useCallback(async () => {
    const currentLngIndex = languages.findIndex((item) => item === i18n.language);
    const nextIndex = currentLngIndex === languages.length - 1 ? 0 : currentLngIndex + 1;
    const nextLng = languages[nextIndex];

    await i18n.changeLanguage(nextLng);
  }, [i18n]);

  return (
    <ContainerHome>
      <Title>{t('title')}</Title>
      <button onClick={handleLangChange}>{t('buttons.translate')}</button>
    </ContainerHome>
  );
};

export default Home;
