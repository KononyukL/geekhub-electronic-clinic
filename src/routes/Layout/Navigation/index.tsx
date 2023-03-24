import React, { FC } from 'react';
import { Container } from './styled';
import { NAVIGATION_CONFIG } from './config';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface INavigation {
  isHeader?: boolean;
}
const Navigation: FC<INavigation> = ({ isHeader }) => {
  const { t } = useTranslation();
  return (
    <Container>
      {NAVIGATION_CONFIG.map((nav) => {
        if (nav.isHeader) {
          if (isHeader) {
            return <Link to={nav.path}>{t(nav.name)}</Link>;
          }
          return null;
        }

        return <Link to={nav.path}>{t(nav.name)}</Link>;
      })}
    </Container>
  );
};

export default Navigation;
