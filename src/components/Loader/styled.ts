import { styled, Box } from "@mui/material";

export const Loading = styled(Box)(() => ({
  width: 100,
  height: 100,
  border: '6px solid rgba(0, 0, 0, 0.48)',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'block',
  margin: '50px auto',
  boxSizing: 'border-box',
  animation: '$rotation 1s linear infinite',

  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));