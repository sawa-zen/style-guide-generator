import * as React from 'react';
import styled from 'styled-components/primitives';
import Text from './Text';
import { colors } from '../components/styles';

const ColorSample = ({ title, code, style, ...rest }) => (
  <Wrapper style={style} >
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
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.kemuri};
  padding: 16px;
  border-radius: 5px;
`;

const Circle = styled.View`
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

const Title = Text.extend.attrs({
  variant: 'display3'
})``;

const Code = Text.extend``;

export default ColorSample;
