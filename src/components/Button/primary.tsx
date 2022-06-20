import React, {Fragment} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {useTheme} from 'styled-components';
import CustomText from '../General/text';
import MaterialCommmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, StyledButtonContainer} from './styles';

interface Props extends TouchableOpacityProps {
  title: string | React.ReactNode;
  onPress: () => void;
  containerStyle?: ViewStyle;
  loading?: boolean;
  prefixIcon?: string | React.ReactNode;
}

export default function ButtonPrimary({
  title = 'Press me',
  onPress = () => {},
  containerStyle,
  loading,
  ...props
}: Props) {
  const theme = useTheme();
  return (
    <StyledButtonContainer
      onPress={onPress}
      style={[containerStyle]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size={'small'}
          color={theme.colors.buttonTitle}
          style={styles.icon}
        />
      ) : (
        <Fragment>
          {props.prefixIcon &&
            (typeof props.prefixIcon === 'string' ? (
              <MaterialCommmunityIcons
                name={String(props.prefixIcon)}
                color={theme.colors.buttonTitle}
                size={25}
              />
            ) : (
              props.prefixIcon
            ))}
          <CustomText color={theme.colors.buttonTitle} family={'semiBold'}>
            {title}
            {'  '}
          </CustomText>
        </Fragment>
      )}
    </StyledButtonContainer>
  );
}
