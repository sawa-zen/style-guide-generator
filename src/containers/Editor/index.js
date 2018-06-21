import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../components/styles';
import Header from './Header';
import Section from './Section';
import ColorList from './ColorList';
import TextList from './TextList';

const Editor = () => (
  <Wrapper>
    <Header />
    <Body>
      <StyledSection title="Colors">
        <ColorList />
      </StyledSection>
      <StyledSection title="TextStyles">
        <TextList />
      </StyledSection>
    </Body>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  background-color: ${colors.kasumi};
`;

const Body = styled.div`
  padding: 16px;
`;

const StyledSection = styled(Section)`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Editor;
