import React, {Fragment} from 'react';
import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';
import CustomText from '../General/text';

import {StyledButtonContainer} from './styles';

interface Props extends TouchableOpacityProps {
  containerStyle?: ViewStyle;
}

export default function PortfolioSelected({
  containerStyle,

  ...props
}: Props) {
  const theme = useTheme();
  return (
    <StyledButtonContainer
      disabled
      style={[
        containerStyle,
        {backgroundColor: theme.colors.itemSelectedBackground, marginTop: 0},
      ]}
      {...props}
    >
      <CustomText color={theme.colors.textGrey} family={'bold'} size={'16'}>
        This portfolio is selected
      </CustomText>
    </StyledButtonContainer>
  );
}
