import {View, Text} from 'react-native';
import React, {Fragment, useState} from 'react';
import {useTheme} from 'styled-components';
import Svgs from '../../assets/svg';
import {FlexRow} from '../General/styles';
import {StyledInvestmentMenuItem, StyledRecentHeader, styles} from './styles';
import CustomText from '../General/text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonPrimary from '../Button/primary';

const {WalletO, Users, FamilyPlusO, RotateRight} = Svgs;

export default function FamilyPlusInvestmentGrow() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderMenuItem = ({
    title,
    icon,
  }: {
    title: string;
    icon: React.ReactNode;
  }) => (
    <FlexRow
      style={[
        styles.recentItemContainer,
        {backgroundColor: theme.colors.growBackground},
      ]}
      key={title}
    >
      <FlexRow>
        <FlexRow
          justifyContent="center"
          backgroundColor={theme.colors.backgroundPurpleAlt}
          style={{width: 40, height: 40, borderRadius: 40}}
        >
          {icon}
        </FlexRow>
        <View>
          <CustomText family="medium" size="14">
            {'\t'}
            {title}
          </CustomText>
        </View>
      </FlexRow>
      <FlexRow></FlexRow>
    </FlexRow>
  );

  return (
    <View
      style={[
        styles.recentContainer,
        {backgroundColor: theme.colors.growBackground},
      ]}
    >
      <StyledRecentHeader
        style={{backgroundColor: theme.colors.growBackground}}
      >
        <CustomText family="bold" size="16" height={20}>
          Grow your knowledge
        </CustomText>
      </StyledRecentHeader>
      {data.map((item: any, index) => renderMenuItem({...item}))}
    </View>
  );
}

const data = [
  {title: 'What is Family Plus?', icon: <Users width={20} height={20} />},
  {
    title: 'How do Round-Ups work?',
    icon: <RotateRight width={20} height={20} />,
  },
  {
    title: 'What is FamilyPlus Savings?',
    icon: <FamilyPlusO width={20} height={20} />,
  },
  {
    title: 'How can I withdraw my money?',
    icon: <WalletO width={20} height={20} />,
  },
];
