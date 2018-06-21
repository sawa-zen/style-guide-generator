import * as React from 'react';
import styled from 'styled-components/primitives';
import { Section, TextSample } from '../components';
import { textStyles } from '../components/styles';

const TextList = ({ ...rest }) => (
  <List {...rest}>
    {
      Object.keys(textStyles).map((key) => (
        <StyledTextSample
          key={key}
          variant={key}
          size={textStyles[key].size}
          weight={textStyles[key].weight}
        />
      ))
    }
  </List>
);

const List = styled.View``;

const StyledTextSample = styled(TextSample)`
  margin-bottom: 16px;
`;

export default TextList;
