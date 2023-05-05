import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from 'components/view/profile/ NoRecords/styled';

interface INoRecords {
  paddingSize?: number;
}

const NoRecords: FC<INoRecords> = ({ paddingSize = 0 }) => {
  return (
    <StyledBox sx={{ padding: `24px ${paddingSize}px` }}>
      <Typography sx={{ fontWeight: 600 }}>На даний момент записів немає</Typography>
    </StyledBox>
  );
};

export default NoRecords;
