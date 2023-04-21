import React, { FC } from 'react';
import { Box, StyledLink } from './styled';
import { NAVIGATION_CONFIG } from './config';

interface INavigation {
  isWhite?: boolean;
}

const Navigation: FC<INavigation> = ({ isWhite }) => {
  return (
    <Box sx={{ color: isWhite ? 'secondary.contrastText' : 'text.primary' }}>
      {NAVIGATION_CONFIG.map((nav) => (
        <StyledLink key={nav.name} to={nav.path}>
          {nav.name}
        </StyledLink>
      ))}
    </Box>
  );
};

export default Navigation;
