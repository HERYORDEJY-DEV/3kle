import React, {Fragment} from 'react';
import {
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
          color={theme.colors.textGrey}
          style={styles.icon}
        />
      ) : (
        <Fragment>
          {props.prefixIcon &&
            (typeof props.prefixIcon === 'string' ? (
              <MaterialCommmunityIcons
                name={String(props.prefixIcon)}
                color={theme.colors.textGrey}
                size={25}
              />
            ) : (
              props.prefixIcon
            ))}
          <CustomText color={theme.colors.textGrey} family={'semiBold'}>
            {title}
            {'  '}
          </CustomText>
        </Fragment>
      )}
    </StyledButtonTextContainer>
  );
}
