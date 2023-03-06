import styled from 'styled-components';
import { TTheme } from '../../theme';

export const ContainerHome = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }: { theme: TTheme }) => theme.secondary};
`;
