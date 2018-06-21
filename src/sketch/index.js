import * as React from 'react';
import styled from 'styled-components/primitives';
import { Artboard, render } from 'react-sketchapp';
import { colors } from '../components/styles';
import ColorSection from './ColorSection';

const StyledArtboard = styled(Artboard)`
  width: 960px;
  height: auto;
  background-color: ${colors.kasumi};
  flex-direction: colomn;
`;

const Body = styled.View`
  padding: 16px;
`;

export default function (context) {
  render(
    <StyledArtboard name="Style Guide">
      <Body>
        <ColorSection />
      </Body>
    </StyledArtboard>,
    context.document.currentPage()
  );
};
