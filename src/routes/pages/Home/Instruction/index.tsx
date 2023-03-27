import React from 'react';
import { SectionTitle } from '../styled';
import { Container, InstructionInfo, InstructionWrap } from './styled';

const Instruction = () => {
  return (
    <Container>
      <SectionTitle>Як записатись в 3 кліка?</SectionTitle>
      <InstructionWrap>
        <InstructionInfo>Оберіть спеціаліста</InstructionInfo>
        <InstructionInfo>Оберіть зручну дату та час</InstructionInfo>
        <InstructionInfo>Запишіться на прийом</InstructionInfo>
      </InstructionWrap>
    </Container>
  );
};

export default Instruction;
