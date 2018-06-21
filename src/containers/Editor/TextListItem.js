import * as React from 'react';
import styled from 'styled-components';
import { TextSample } from '../../components';

const TextListItem = ({ variant, size, weight, ...rest }) => (
  <Wrapper {...rest}>
    <TextSample
      variant={variant}
      size={size}
      weight={weight}
    />
  </Wrapper>
);

const Wrapper = styled.div`
`;

export default TextListItem;
