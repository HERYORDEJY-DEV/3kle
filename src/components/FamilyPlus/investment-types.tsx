import {View, Text} from 'react-native';
import React, {Fragment, useState} from 'react';
import {useTheme} from 'styled-components';
import Svgs from '../../assets/svg';
import {FlexRow} from '../General/styles';
import {StyledInvestmentMenuItem, styles} from './styles';
import CustomText from '../General/text';

const {FamilyPlus, InvestStocks, User} = Svgs;

export default function FamilyPlusInvestmentTypes() {
  const renderMenuItem = ({
    title,
    icon,
    onPress,
  }: {
    title: string;
    onPress: () => void;
    icon: React.ReactNode;
  }) => (
    <View style={styles.menuItemContainer} key={title}>
      <StyledInvestmentMenuItem>{icon}</StyledInvestmentMenuItem>
      <CustomText family="medium" textAlign="center" size="12">
        {title}
      </CustomText>
    </View>
  );

  return (
    <View style={styles.menuContainer}>
      <FlexRow alignItems="flex-start">
        {data.map((item: any, index) => renderMenuItem({...item}))}
      </FlexRow>
    </View>
  );
}

const data = [
  {title: 'FamilyPlus Savings', icon: <FamilyPlus />},
  {title: 'Invest in Stocks', icon: <InvestStocks />},
  {title: 'Early for Kids', icon: <User />},
];
