import * as React from 'react';
import styled from 'styled-components/primitives';
import Text from './Text';

const TextSample = ({ variant, size, weight, ...rest }) => (
  <Wrapper {...rest}>
    <Variant>{variant}</Variant>
    <Sample size={size} weight={weight} >
      Sample Text {size}px {weight}
    </Sample>
  </Wrapper>
);

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

const Variant = styled(Text).attrs({
  variant: 'caption',
})`
  width: 100px;
`;

const Sample = styled.Text`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
`;

export default TextSample;
