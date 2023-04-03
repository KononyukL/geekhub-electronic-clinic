import React, { ReactNode } from 'react';
import { Container, ContainerInput, TitleForm } from './styled';

interface IContainerForm {
  children: ReactNode;
  title: string;
}
const ContainerForm: React.FC<IContainerForm> = ({ children, title }) => {
  return (
    <Container>
      <TitleForm>{title}</TitleForm>
      <ContainerInput>{children}</ContainerInput>
    </Container>
  );
};

export default ContainerForm;
