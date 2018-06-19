import * as React from 'react';
import styled from 'styled-components/primitives';
import { COLORS } from '../components/style';

const Button = ({ label, ...rest }) => (
  <Wrapper>
    <Label>{ label }</Label>
  </Wrapper>
);

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 32px;
  border-radius: 3px;
  background-color: ${COLORS.SECONDARY};
`;

const Label = styled.Text`
  color: ${COLORS.YUKI};
`;

export default Button;
