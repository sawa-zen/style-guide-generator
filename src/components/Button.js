import * as React from 'react';
import { View } from 'react-primitives';
import styled from 'styled-components';

const Button = ({ label, ...rest }) => (
  <Wrapper>
    <Label>{ label }</Label>
    <View>
    </View>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 48px;
  border-radius: 3px;
  background-color: red;
`;

const Label = styled.div`
`;

export default Button;
