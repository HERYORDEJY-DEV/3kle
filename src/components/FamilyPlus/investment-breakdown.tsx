import {View, Text} from 'react-native';
import React, {Fragment, useState} from 'react';
import {useTheme} from 'styled-components';
import Svgs from '../../assets/svg';
import {FlexRow} from '../General/styles';
import {StyledInvestmentMenuItem, styles} from './styles';
import CustomText from '../General/text';

const {ArrowRight} = Svgs;

export default function FamilyPlusInvestmentBreakdown() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderMenuItem = ({
    title,
    value,
    onPress,
    index,
  }: {
    title: string;
    onPress: () => void;
    value: string;
    index: number;
  }) => (
    <FlexRow style={styles.beakdownItemContainer} key={`${index}`}>
      <CustomText family="medium" height={18}>
        {title}
      </CustomText>
      <FlexRow>
        <CustomText
          family="medium"
          height={18}
          color={theme.colors.buttonPrimary}
        >
          {value} {'\t\t'}
        </CustomText>
        <ArrowRight />
      </FlexRow>
    </FlexRow>
  );

  return (
    <View style={styles.breakdownContainer}>
      {data.map((item: any, index) => renderMenuItem({...item, index}))}
    </View>
  );
}

const data = [
  {title: 'Porfolio', value: 'Aggressive'},
  {title: 'Round-Up Settings', value: 'Automatic'},
  {title: 'Reccuring', value: '2$0/Month'},
  {title: 'Beneficiary', value: '1 Child'},
  {title: 'One-Time Investment', value: ''},
];
