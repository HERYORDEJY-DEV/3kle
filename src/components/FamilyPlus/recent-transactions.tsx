import {View} from 'react-native';
import React, { useState} from 'react';
import {useTheme} from 'styled-components';
import Svgs from '../../assets/svg';
import {FlexRow} from '../General/styles';
import { StyledRecentHeader, styles} from './styles';
import CustomText from '../General/text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonPrimary from '../Button/primary';
import {useNavigation} from '@react-navigation/native';

const {ArrowRight} = Svgs;

export default function FamilyPlusInvestmentRecent() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderMenuItem = ({
    title,
    status,
    amount,
  }: {
    title: string;
    status: string;
    amount: string;
  }) => (
    <FlexRow style={styles.recentItemContainer} key={title}>
      <FlexRow>
        <AntDesign
          name={'checkcircle'}
          size={25}
          color={theme.colors.backgroundPurple}
        />
        <View>
          <CustomText family="medium">
            {'\t\t'}
            {title}
          </CustomText>
          <CustomText family="regular" size="12">
            {'\t\t'}
            {status}
          </CustomText>
        </View>
      </FlexRow>
      <FlexRow>
        <CustomText family="regular" height={18}>
          {amount}
        </CustomText>
      </FlexRow>
    </FlexRow>
  );

  return (
    <View style={styles.recentContainer}>
      <StyledRecentHeader>
        <CustomText family="bold" size="16">
          Recent Transactions
        </CustomText>
      </StyledRecentHeader>
      {data.map((item: any, index) => renderMenuItem({...item}))}
      <ButtonPrimary
        onPress={() => navigation.navigate({name: 'AggressivePortfolio'})}
        title={'View All'}
        containerStyle={{
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          marginTop: 0,
        }}
      />
    </View>
  );
}

const data = [
  {title: 'One Time Investment', status: 'Processing', amount: '$20'},
  {title: 'Withdrawal', status: 'Processing', amount: '$-8.00'},
  {title: 'Round-Up Investment', status: 'Processing', amount: '$10.36'},
];
