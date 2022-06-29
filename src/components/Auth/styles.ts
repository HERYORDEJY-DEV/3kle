import styled from 'styled-components';
import {Image, View} from 'react-native';
import CustomText from '../General/text';

export const StyledAuthHeader = styled(View)`
  background-color: ${p => p.theme.colors.primaryBlue};
  height: ${p => p.theme.spacing.custom(70)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledAuthHeaderImage = styled(Image)`
  height: ${p => p.theme.spacing.custom(50)}px;
  width: ${p => p.theme.spacing.custom(150)}px;
`;

export const StyledAuthTitle = styled(CustomText)<{sub?: boolean}>`
  font-size: ${p =>
    p.sub ? p.theme.fontSize.custom(18) : p.theme.fontSize.custom(34)};
  color: ${p => p.theme.colors.textGrey};
  text-align: center;
  margin-bottom: ${p => (p.sub ? '20px' : '10px')};
  font-family: ${p => p.theme.fontFamily.light};
  padding: 0px 10px;
`;
