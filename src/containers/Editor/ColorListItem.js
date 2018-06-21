import * as React from 'react';
import styled from 'styled-components';
import { ColorSample } from '../../components';
import { colors } from '../../components/styles';

const ColorListItem = ({ title, code, ...rest }) => (
  <Wrapper {...rest}>
    <ColorSample
      title={title}
      code={code}
    />
  </Wrapper>
);

const Wrapper = styled.li`
  list-style: none;
`;

export default ColorListItem;
