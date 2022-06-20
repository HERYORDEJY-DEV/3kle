import styled from 'styled-components';
import {TextInput, View} from 'react-native';
import CustomText from '../General/text';

export const StyledTextInputContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  border: 1px solid #ccc;
  margin: 0px 10px;
  margin-bottom: 15px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;
`;

export const StyledTextInputIcon = styled(View)<{suffix?: boolean}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  border-left-width: ${p => (p.suffix ? '1px' : '0px')};
  border-right-width: ${p => (p.suffix ? '0px' : '1px')};
  border-top-width: 0;
  border-bottom-width: 0;
  background-color: transparent;
`;

export const StyledTextInput = styled(TextInput)`
  font-family: ${p => p.theme.fontFamily.regular};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.42857143px;
  color: ${p => p.theme.colors.text};
  flex: 1;
  background-color: transparent;
  padding: 0 5px;
`;

export const StyledTextInputLabel = styled(CustomText)<{rquired?: boolean}>`
  font-family: ${p => p.theme.fontFamily.light};
  font-size: ${p => p.theme.fontSize.custom(14)};
  color: ${p => (p.rquired ? p.theme.colors.red : p.theme.colors.text)};
  padding-top: 5px;
  padding-left: 10px;
`;
