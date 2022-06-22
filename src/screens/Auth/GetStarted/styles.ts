import {StyleSheet, View} from 'react-native';
import styled from 'styled-components';
import CustomText from '../../../components/General/text';
import responsive from '../../../utils/responsive';

export const styles = StyleSheet.create({
  paginationIcon: {
    paddingHorizontal: 2.5,
  },
});

export const StyledRenderContent = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: ${responsive.width(100)};
`;

export const StyledGetStartedTitle = styled(CustomText)`
  font-family: ${p => p.theme.fontFamily.bold};
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.16px;
  color: ${p => p.theme.colors.textBlue};
`;

export const StyledGetStartedSubtitle = styled(CustomText)`
  font-family: ${p => p.theme.fontFamily.regular};
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.233684px;
  color: #333333;
  padding: 10px 0px;
  width: ${responsive.width(80)};
`;
