import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../components';
import { textStyles } from '../../components/styles';
import TextListItem from './TextListItem';

const TextList = ({ ...rest }) => (
  <Wrapper {...rest}>
    {
      Object.keys(textStyles).map((key) => {
        const data = textStyles[key];
        return (
          <TextListItem
            key={key}
            variant={key}
            size={data.size}
            weight={data.weight}
          />
        );
      })
    }
  </Wrapper>
);

const Wrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export default TextList;
