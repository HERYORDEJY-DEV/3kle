import {StyleSheet, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import CustomText from '../../components/General/text';
import responsive from '../../utils/responsive';

export const styles = StyleSheet.create({
  paginationIcon: {
    paddingHorizontal: 2.5,
  },
  imageBackground: {
    minHeight: 173,
    justifyContent: 'space-around',
    margin: 20,
    borderRadius: 6,
    overflow: 'hidden',
  },
  imageBackgroundImage: {
    borderRadius: 6,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
});

export const StyledRenderContent = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  width: ${responsive.width(100, true)};
`;

export const StyledScreenTitle = styled(CustomText)`
  font-family: ${p =>
    p.family == 'bold' ? p.theme.fontFamily.bold : p.theme.fontFamily.medium};
  font-size: ${p => p.size ?? '20'}px;
  line-height: ${p => p.height ?? '30'}px;
  text-align: center;
  letter-spacing: -0.165px;
  color: ${p => p.color ?? p.theme.colors.textGrey};
`;

export const StyledDashboardAmount = styled(CustomText)`
  font-family: ${p => p.theme.fontFamily.bold};
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: ${0.05 * 16}px;
  color: ${p => p.theme.colors.white};
`;

export const StyledDashboardAmountDesc = styled(CustomText)`
  font-family: ${p => p.theme.fontFamily.bold};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.165px;
  color: ${p => p.theme.colors.white};
`;

export const StyledDashboardButtonContainer = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  padding: 0px;
  background-color: ${p => p.theme.colors.white};
  height: 50px;
  border-radius: 6px;
  flex: 0.3;
`;

export const StyledDashboardButtonText = styled(CustomText)`
  font-family: ${p => p.theme.fontFamily.bold};
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  color: ${p => p.theme.colors.textGrey};
`;
