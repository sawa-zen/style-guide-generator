import * as React from 'react';
import styled from 'styled-components/primitives';
import Text from './Text';
import { colors } from './styles';

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
  background-color: ${colors.secondary};
`;

const Label = styled(Text).attrs({
  variant: 'body'
})`
  color: ${colors.yuki};
`;

export default Button;
