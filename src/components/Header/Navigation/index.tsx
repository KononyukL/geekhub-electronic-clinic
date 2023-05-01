import React, { FC } from 'react';
import { Box, StyledLink } from './styled';
import { NAVIGATION_CONFIG } from './config';
import { theme } from 'theme';

interface INavigation {
  isWhite?: boolean;
}

const Navigation: FC<INavigation> = ({ isWhite }) => {
  return (
    <Box sx={{ color: isWhite ? 'secondary.contrastText' : 'text.primary' }}>
      {NAVIGATION_CONFIG.map((nav) => (
        <StyledLink
          key={nav.name}
          to={nav.path}
          style={({ isActive }) => ({
            color: isActive && nav.isLink ? theme.palette.primary.main : ''
          })}>
          {nav.name}
        </StyledLink>
      ))}
    </Box>
  );
};

export default Navigation;
