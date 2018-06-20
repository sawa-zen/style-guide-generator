import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../components';
import { colors } from '../../components/styles';

const Section = ({ title, children, ...rest }) => (
  <Wrapper {...rest}>
    <Title>{ title }</Title>
    <Body>
      { children }
    </Body>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 24px;
  background-color: ${colors.yuki};
`;

const Title = styled(Text).attrs({
  variant: 'display5'
})`
  color: ${colors.katana};
`;

const Body = styled.div`
`;

export default Section;
