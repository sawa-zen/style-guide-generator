import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../src/components';

const Home = () => (
  <Wrapper>
    <Button label="test" />
    Style Guide Generator
  </Wrapper>
);

const Wrapper = styled.div`
  background: red;
`;

export default Home;
