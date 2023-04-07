import { Box } from '@mui/material';
import { ReactComponent as MinusIcon } from 'assets/icons/minus.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': {
          display: 'none'
        },
        '.expandIconWrapper': {
          display: 'none'
        },
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'block'
        }
      }}>
      <div className="expandIconWrapper">
        <MinusIcon />
      </div>
      <div className="collapsIconWrapper">
        <PlusIcon />
      </div>
    </Box>
  );
};
export default CustomExpandIcon;
