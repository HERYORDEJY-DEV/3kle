import {StatusBar} from 'react-native';
import React from 'react';
import {
  StyledContainerLayout,
  StyledContentLayout,
} from '../../components/General/styles';
import NavBar from '../../components/Nav-Bar';
import {styles, StyledScreenTitle} from './styles';
import {useTheme} from 'styled-components';
import FamilyPlusDashboardCard from '../../components/FamilyPlus/dasboard-card';
import FamilyPlusInvestmentTypes from '../../components/FamilyPlus/investment-types';
import FamilyPlusInvestmentBreakdown from '../../components/FamilyPlus/investment-breakdown';
import FamilyPlusInvestmentRecent from '../../components/FamilyPlus/recent-transactions';
import FamilyPlusHypothetical from '../../components/FamilyPlus/hypothetical';
import FamilyPlusInvestmentGrow from '../../components/FamilyPlus/grow-knowledge';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../../navigation/types';

export default function FamilyPlusDashboard() {
  const theme = useTheme();
  const route =
    useRoute<RootStackScreenProps<'FamilyPlusDashboard'>['route']>();
  const navigation =
    useNavigation<RootStackScreenProps<'FamilyPlusDashboard'>['navigation']>();

  const {} = route.params;

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
        <FamilyPlusInvestmentRecent
          onViewAll={() =>
            navigation.navigate('AggressivePortfolio', {id: 1, list: []})
          }
        />
        <FamilyPlusHypothetical />
        <FamilyPlusInvestmentGrow />
      </StyledContentLayout>
      {/* <ButtonPrimary title={'Get Started'} onPress={() => {}} /> */}
    </StyledContainerLayout>
  );
}
