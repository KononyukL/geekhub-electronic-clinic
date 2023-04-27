import React, { FC } from 'react';
import { theme } from 'theme';
import { Avatar as MUIAvatar } from '@mui/material';

interface IAvatar {
  children: string;
}
const Avatar: FC<IAvatar> = ({ children }) => {
  return (
    <MUIAvatar
      sx={{
        backgroundColor: theme.palette.background.default,
        width: '80px',
        height: '80px',
        color: theme.palette.text.secondary,
        fontSize: '30px'
      }}
      variant="square">
      {children}
    </MUIAvatar>
  );
};

export default Avatar;
