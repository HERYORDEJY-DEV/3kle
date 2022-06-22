import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  FlexRow,
  StyledContainerLayout,
  StyledContentLayout,
} from '../../components/General/styles';
import CustomText from '../../components/General/text';
import NavBar from '../../components/Nav-Bar';
import {
  styles,
  StyledScreenTitle,
  StyledDashboardAmount,
  StyledDashboardAmountDesc,
  StyledDashboardButtonContainer,
  StyledDashboardButtonText,
} from './styles';
import Svgs from '../../assets/svg';
import Images from '../../assets/images';
import responsive from '../../utils/responsive';
import {useTheme} from 'styled-components';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonPrimary from '../../components/Button/primary';
import FamilyPlusDashboardCard from '../../components/FamilyPlus/dasboard-card';
import FamilyPlusInvestmentTypes from '../../components/FamilyPlus/investment-types';
import FamilyPlusInvestmentBreakdown from '../../components/FamilyPlus/investment-breakdown';
import FamilyPlusInvestmentRecent from '../../components/FamilyPlus/recent-transactions';
import FamilyPlusHypothetical from '../../components/FamilyPlus/hypothetical';
import FamilyPlusInvestmentGrow from '../../components/FamilyPlus/grow-knowledge';
import {VictoryPie} from 'victory-native';

// const {FamlyPlusDashboard} = Svgs;
const {FamlyPlusDashboard} = Images;

const fullScreenWidth = responsive.width(100);

export default function FamilyPlusDashboard() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [...Array(4).keys()];

  return (
    <StyledContainerLayout>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <NavBar showBackButton={true} />
      <StyledContentLayout
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <StyledScreenTitle>Family Plus Investment</StyledScreenTitle>

        <FamilyPlusDashboardCard />
        <FamilyPlusInvestmentTypes />
        <FamilyPlusInvestmentBreakdown />
        <FamilyPlusInvestmentRecent />
        <FamilyPlusHypothetical />
        <FamilyPlusInvestmentGrow />
      </StyledContentLayout>
      {/* <ButtonPrimary title={'Get Started'} onPress={() => {}} /> */}
    </StyledContainerLayout>
  );
}
