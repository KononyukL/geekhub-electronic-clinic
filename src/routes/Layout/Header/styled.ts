import styled from 'styled-components';
import { ContentContainer } from '../../styled';
import Button from '../../../components/Button';

export const ContainerHeader = styled.header``;
export const ContainerContacts = styled.div`
  background: #f9f9f9;
`;
export const HeaderMain = styled.div`
  padding: 30px 0;
`;

export const StyledContentContainer = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 16px 0;
`;

export const ContactsInfo = styled.p``;

export const Tel = styled.a``;

export const HeaderButton = styled(Button)`
  height: 40px;
  width: 110px;
  border-radius: 12px;
`;
