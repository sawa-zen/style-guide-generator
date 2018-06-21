import * as React from 'react';
import styled from 'styled-components/primitives';
import { Artboard, render } from 'react-sketchapp';
import { Section } from '../components';
import { colors } from '../components/styles';
import ColorList from './ColorList';
import TextList from './TextList';

const MyArtboard = () => (
  <StyledArtboard name="Style Guide">
    <Body>
      <StyledSection title="Colors">
        <ColorList />
      </StyledSection>
      <StyledSection title="TextStyles">
        <TextList />
      </StyledSection>
    </Body>
  </StyledArtboard>
);

const StyledArtboard = styled(Artboard)`
  width: 960px;
  height: auto;
  background-color: ${colors.kasumi};
  flex-direction: colomn;
`;

const Body = styled.View`
  padding: 16px;
`;

const StyledSection = styled(Section)`
  margin-bottom: 16px;
`;

export default function (context) {
  render(
    <MyArtboard />,
    context.document.currentPage()
  );
};
