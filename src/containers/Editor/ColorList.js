import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../components/styles';
import ColorListItem from './ColorListItem';

const ColorList = ({ ...rest }) => (
  <Wrapper {...rest}>
    {
      Object.keys(colors).map((key) => (
        <ColorListItem
          key={`color_list_items_${key}`}
          title={key}
          code={colors[key]}
        />
      ))
    }
  </Wrapper>
);

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

export default ColorList;
