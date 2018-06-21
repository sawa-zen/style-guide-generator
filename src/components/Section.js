import * as React from 'react';
import styled from 'styled-components/primitives';
import Text from './Text';
import { colors } from './styles';

const Section = ({ title, children, ...rest }) => (
  <Wrapper {...rest}>
    <Title>{ title }</Title>
    <Body>
      { children }
    </Body>
  </Wrapper>
);

const Wrapper = styled.View`
  padding: 48px;
  background-color: ${colors.yuki};
  border-radius: 5px;
`;

const Title = Text.extend.attrs({
  variant: 'display5'
})`
  color: ${colors.katana};
  margin-bottom: 16px;
`;

const Body = styled.View``;

export default Section;
