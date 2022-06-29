import {StyleSheet, View, TouchableOpacity, Pressable} from 'react-native';
import styled from 'styled-components';
import CustomText from '../../components/General/text';
import responsive from '../../utils/responsive';

export const styles = StyleSheet.create({
  hypoTitle: {alignItems: 'center', paddingHorizontal: 10, maringBottom: 30},
  io: {marginVertical: 30},
  paginationIcon: {
    paddingHorizontal: 2.5,
  },
  imageBackground: {
    height: 173,
    justifyContent: 'space-around',
    margin: 20,
    borderRadius: 6,
    overflow: 'hidden',
    width: responsive.width(90),
  },
  imageBackgroundImage: {
    borderRadius: 6,
  },
  menuContainer: {
    margin: 20,
    marginVertical: 30,
  },
  menuItemContainer: {
    alignItems: 'center',
    flex: 1,
  },
  breakdownContainer: {
    margin: 20,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  beakdownItemContainer: {height: 54},
  recentContainer: {
    margin: 20,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 0,
    borderRadius: 6,
  },
  recentItemContainer: {
    height: 54,
    paddingHorizontal: 10,
    backgroundColor: '#FDFDFD',
  },
});

export const StyledRenderContent = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  width: ${responsive.width(100, true)};
`;
export const StyledRecentHeader = styled(View)`
  align-items: flex-start;
  justify-content: center;
  height: 50px;
  background-color: #fbfafa;
  padding-left: 10px;
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
  height: 40px;
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

export const StyledInvestmentMenuItem = styled(Pressable)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.backgroundPurpleAlt};
  border-radius: 200px;
  flex-grow: 0;
  margin-bottom: 10px;
`;

export const StyledHypotheticalContainer = styled(View)`
  background-color: ${p => p.theme.colors.itemBackground2};
  height: ${responsive.height(50)}px;
  margin: 20px;
  padding: 20px 10px;
  justify-content: space-between;
`;
