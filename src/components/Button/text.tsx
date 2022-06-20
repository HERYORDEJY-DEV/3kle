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

import {styles, StyledButtonTextContainer} from './styles';

interface Props extends TouchableOpacityProps {
  title: string | React.ReactNode;
  onPress: () => void;
  containerStyle?: ViewStyle;
  loading?: boolean;
  prefixIcon?: string | React.ReactNode;
}

export default function ButtonText({
  title = 'Press me',
  onPress = () => {},
  containerStyle,
  loading,
  ...props
}: Props) {
  const theme = useTheme();
  return (
    <StyledButtonTextContainer
      onPress={onPress}
      style={[containerStyle]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size={'small'}
          color={theme.colors.text}
          style={styles.icon}
        />
      ) : (
        <Fragment>
          {props.prefixIcon &&
            (typeof props.prefixIcon === 'string' ? (
              <MaterialCommmunityIcons
                name={String(props.prefixIcon)}
                color={theme.colors.text}
                size={25}
              />
            ) : (
              props.prefixIcon
            ))}
          <CustomText color={theme.colors.text} family={'semiBold'}>
            {title}
            {'  '}
          </CustomText>
        </Fragment>
      )}
    </StyledButtonTextContainer>
  );
}
