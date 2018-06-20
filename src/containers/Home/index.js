import * as React from 'react';
import styled from 'styled-components';
import { Button, Text } from '../../components';
import { colors } from '../../components/styles';

const Home = () => (
  <Wrapper>
    <Main>
      <Title variant="display5" >Style Guide Generator</Title>
      <Button label="Create" />
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
`;

const Title = styled(Text)`
  margin-bottom: 16px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${colors.yuki};
  background: linear-gradient(to bottom, #c44ce6 0%,#b620e0 100%);
`;

export default Home;
