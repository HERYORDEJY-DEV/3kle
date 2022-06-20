import React, {Fragment} from 'react';

import {Text, TextInputProps, View} from 'react-native';
import {
  StyledTextInputContainer,
  StyledTextInput,
  StyledTextInputIcon,
  StyledTextInputLabel,
} from './styles';
import MaterialCommmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {StyledText} from '../General/styles';
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
            <StyledTextInputLabel rquired={props.required}>
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
                color={theme.colors.text}
                size={25}
              />
            ) : (
              props.prefixIcon
            )}
          </StyledTextInputIcon>
        )}
        <StyledTextInput
          {...props}
          placeholderTextColor={theme.colors.text + 90}
          secureTextEntry={props.type === 'auth'}
        />
        {props.type === 'auth' && (
          <MaterialCommmunityIcons
            name={'eye-outline'}
            color={theme.colors.text}
            size={25}
          />
        )}
        {props.type !== 'auth' && props.suffixIcon && (
          <StyledTextInputIcon suffix={true}>
            {typeof props.suffixIcon === 'string' ? (
              <MaterialCommmunityIcons
                name={props.suffixIcon}
                color={theme.colors.text}
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
