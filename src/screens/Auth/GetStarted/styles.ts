import {StyleSheet, View, Dimensions} from 'react-native';
import styled from 'styled-components';
import CustomText from '../../../components/General/text';
import responsive from '../../../utils/responsive';
import Animated from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  paginationIcon: {
    paddingHorizontal: 2.5,
  },
  renderContainer: {
    padding: 10,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const StyledRenderContent = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: ${responsive.width(100, true)};
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
  width: ${responsive.width(80, true)};
`;
