import * as React from 'react';
import { View } from 'react-primitives';
import styled from 'styled-components/primitives';
import { Text } from './';
import { colors } from '../components/styles';

const ColorSample = ({ title, code, ...rest }) => (
  <Wrapper {...rest}>
    <Circle code={code} />
    <Body>
      <Title>{ title }</Title>
      <Code>{ code }</Code>
    </Body>
  </Wrapper>
);

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const Circle = styled(({ code, ...rest}) => (
  <View style={rest.style} />
))`
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.code};
  border-radius: 24px;
  border-width: 1px;
  border-color: ${colors.kemuri};
  border-style: solid;
  margin-right: 16px;
`;

const Body = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(Text).attrs({
  variant: 'display3'
})`
`;

const Code = styled(Text)`
`;

export default ColorSample;
