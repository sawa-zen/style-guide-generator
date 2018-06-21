import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../components/styles';
import Header from './Header';
import Section from './Section';
import ColorList from './ColorList';

const Editor = () => (
  <Wrapper>
    <Header />
    <Body>
      <Section title="Colors">
        <ColorList />
      </Section>
    </Body>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${colors.kasumi};
`;

const Body = styled.div`
  padding: 16px;
`;

export default Editor;
