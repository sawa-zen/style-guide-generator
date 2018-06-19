import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../components';
import { COLORS } from '../../components/style';

const Home = () => (
  <Wrapper>
    <Main>
      Style Guide Generator
      <Button label="Create" />
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
`;

const Title = styled.h1`
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 480px;
  color: ${COLORS.YUKI};
  background: linear-gradient(to bottom, #c44ce6 0%,#b620e0 100%);
`;

export default Home;
