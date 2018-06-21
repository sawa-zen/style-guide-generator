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
  border: 1px solid ${colors.kemuri};
  list-style: none;
  padding: 16px;
  border-radius: 5px;
`;

export default ColorListItem;
