import * as React from 'react';
import { View } from 'react-primitives';
import styled from 'styled-components/primitives';
import Text from './Text';
import { colors } from './styles';

const Button = ({ label, onClick, ...rest }) => (
  <Wrapper
    accessibilityRole="button"
    onClick={onClick}
  >
    <Label>{ label }</Label>
  </Wrapper>
);

const Wrapper = styled(View)`
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
