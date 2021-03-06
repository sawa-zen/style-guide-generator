import * as React from 'react';
import styled from 'styled-components/primitives';
import { Section, ColorSample } from '../components';
import { colors } from '../components/styles';

const ColorList = ({ ...rest }) => (
  <List>
    {
      Object.keys(colors).map((key) => (
        <StyledColorSample
          key={key}
          variant={key}
          title={key}
          code={colors[key]}
        />
      ))
    }
  </List>
);

const List = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
`;

const StyledColorSample = styled(ColorSample)`
  width: 400px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export default ColorList;
