import styled from 'styled-components';
import { ContentContainer } from '../styled';

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledContentContainer = styled(ContentContainer)`
  width: 100%;
  flex: 1 1 auto;
`;
