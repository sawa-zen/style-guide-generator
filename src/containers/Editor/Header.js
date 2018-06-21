import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../components/styles';
import { Text, Button } from '../../components';

const Header = ({ ...rest }) => (
  <Wrapper { ...rest }>
    <Title>Style Guide Generator</Title>
    <Link href="/export">
      <Button label="Export" />
    </Link>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background-color: ${colors.primary};
`;

const Title = styled(Text).attrs({
  variant: 'display2'
})`
  flex-grow: 1;
  color: ${colors.yuki};
`;

const Link = styled.a`
  text-decoration: none;
`;

export default Header;
