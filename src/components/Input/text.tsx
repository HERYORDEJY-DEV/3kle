import React, {Fragment} from 'react';

import {TextInputProps} from 'react-native';
import {
  StyledTextInputContainer,
  StyledTextInput,
  StyledTextInputIcon,
  StyledTextInputLabel,
} from './styles';
import MaterialCommmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components';

interface Props extends TextInputProps {
  prefixIcon?: string | React.ReactNode;
  suffixIcon?: string | React.ReactNode;
  type?: string;
  label?: string;
  required?: boolean;
}

export default function InputText(props: Props) {
  const theme = useTheme();
  return (
    <Fragment>
      {props.label && (
        <StyledTextInputLabel>
          {props.label}
          {props.required && (
            <StyledTextInputLabel required={props.required}>
              *
            </StyledTextInputLabel>
          )}
        </StyledTextInputLabel>
      )}
      <StyledTextInputContainer>
        {props.prefixIcon && (
          <StyledTextInputIcon>
            {typeof props.prefixIcon === 'string' ? (
              <MaterialIcons
                name={props.prefixIcon}
                color={theme.colors.textGrey}
                size={25}
              />
            ) : (
              props.prefixIcon
            )}
          </StyledTextInputIcon>
        )}
        <StyledTextInput
          {...props}
          placeholderTextColor={theme.colors.textGrey + 90}
          secureTextEntry={props.type === 'auth'}
        />
        {props.type === 'auth' && (
          <MaterialCommmunityIcons
            name={'eye-outline'}
            color={theme.colors.textGrey}
            size={25}
          />
        )}
        {props.type !== 'auth' && props.suffixIcon && (
          <StyledTextInputIcon suffix={true}>
            {typeof props.suffixIcon === 'string' ? (
              <MaterialCommmunityIcons
                name={props.suffixIcon}
                color={theme.colors.textGrey}
                size={25}
              />
            ) : (
              props.suffixIcon
            )}
          </StyledTextInputIcon>
        )}
      </StyledTextInputContainer>
    </Fragment>
  );
}
