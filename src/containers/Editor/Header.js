import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../components/styles';
import { Text } from '../../components';

const Header = ({ ...rest }) => (
  <Wrapper { ...rest }>
    <Title>Style Guide Generator</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  background-color: ${colors.katana};
`;

const Title = styled(Text).attrs({
  variant: 'display2'
})`
  margin: 0 16px;
  color: ${colors.yuki};
`;

export default Header;
