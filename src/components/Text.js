import * as React from 'react';
import { Text as BaseText } from 'react-primitives';
import styled, { css } from 'styled-components/primitives';
import { textStyles } from './styles';

const getTextStyle = (variant) => {
  const style = textStyles[variant] || textStyles['body'];
  return css`
    font-size: ${style.size}px;
    font-weight: ${style.weight};
  `;
}

const Text = styled(BaseText)`
  ${props => getTextStyle(props.variant)}
`;

export default Text;
