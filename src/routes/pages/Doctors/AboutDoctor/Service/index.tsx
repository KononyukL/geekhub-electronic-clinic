import React, { FC } from 'react';
import { Wrapper, Block, ServiceInfo, ServiceText } from './styled';
import { IService } from '../../typesAndInterfaces';

const Index: FC<IService> = ({ doctor }) => {
  return (
    <Wrapper>
      <Block>
        <ServiceText>Стаж:</ServiceText>
        <ServiceInfo>{doctor.seniority} років</ServiceInfo>
      </Block>
      <Block>
        <ServiceText>Категорія:</ServiceText>
        <ServiceInfo>{doctor.category}</ServiceInfo>
      </Block>
      <Block>
        <ServiceText>Прийом:</ServiceText>
        <ServiceInfo>{doctor.price} грн</ServiceInfo>
      </Block>
    </Wrapper>
  );
};

export default Index;
