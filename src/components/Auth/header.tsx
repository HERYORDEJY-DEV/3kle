import React from 'react';

import {Image, Text, View} from 'react-native';
import {StyledAuthHeader, StyledAuthHeaderImage} from './styles';

export default function AuthHeader() {
  return (
    <StyledAuthHeader>
      <StyledAuthHeaderImage
        source={require('../../assets/images/appLogo.png')}
      />
    </StyledAuthHeader>
  );
}
