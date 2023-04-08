import React, { FC } from 'react';
import { Box, StyledLink } from './styled';
import { NAVIGATION_CONFIG } from './config';
import { useTranslation } from 'react-i18next';

interface INavigation {
  isWhite?: boolean;
}

const Navigation: FC<INavigation> = ({ isWhite }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ color: isWhite ? 'secondary.contrastText' : 'text.primary' }}>
      {NAVIGATION_CONFIG.map((nav) => (
        <StyledLink key={nav.name} to={nav.path}>
          {t(nav.name)}
        </StyledLink>
      ))}
    </Box>
  );
};

export default Navigation;
