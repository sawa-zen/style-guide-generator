import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../components/styles';
import Header from './Header';

const Editor = () => (
  <Wrapper>
    <Header />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  background-color: ${colors.kasumi};
`;

export default Editor;
