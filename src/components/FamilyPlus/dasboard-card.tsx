import {View, ImageBackground, ScrollView, Dimensions} from 'react-native';
import React, {Fragment, useState} from 'react';
import {
  styles,
  StyledDashboardAmount,
  StyledDashboardAmountDesc,
  StyledDashboardButtonContainer,
  StyledDashboardButtonText,
} from './styles';
import Images from '../../assets/images';
import {useTheme} from 'styled-components';
import {FlexRow} from '../General/styles';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import responsive from '../../utils/responsive';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import PaginationDot from '../General/pagin-dot';

const {FamlyPlusDashboard} = Images;

const {width} = Dimensions.get('window');

export default function FamilyPlusDashboardCard() {
  const theme = useTheme();

  const sharedValue = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const {x} = event.contentOffset;
      sharedValue.value = x;
    },
  });

  const activeIndexValue = useDerivedValue(() => {
    return Math.round(sharedValue.value / width);
  });

  const renderDashboardButton = ({
    title,
    onPress,
  }: {
    title: string;
    onPress: () => void;
  }) => (
    <StyledDashboardButtonContainer onPress={onPress}>
      <StyledDashboardButtonText>{title}</StyledDashboardButtonText>
    </StyledDashboardButtonContainer>
  );

  const renderContent = ({
    title,
    amount,
    withButtons,
    index,
  }: {
    title: string;
    amount: string;
    withButtons: boolean;
    index: number;
  }) => (
    <ImageBackground
      key={title}
      source={FamlyPlusDashboard}
      style={styles.imageBackground}
      imageStyle={styles.imageBackgroundImage}
    >
      <View>
        <StyledDashboardAmount>{amount}</StyledDashboardAmount>
        <StyledDashboardAmountDesc>{title}</StyledDashboardAmountDesc>
      </View>
      {withButtons && (
        <FlexRow justifyContent="space-evenly">
          {renderDashboardButton({title: 'Add Money', onPress: () => {}})}
          {renderDashboardButton({title: 'Withdraw', onPress: () => {}})}
        </FlexRow>
      )}
    </ImageBackground>
  );

  return (
    <Fragment>
      <View style={{minHeight: 193}}>
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          snapToInterval={width}
          onScroll={onScrollHandler}
        >
          {data.map((item: any, index: number) =>
            renderContent({...item, index}),
          )}
        </Animated.ScrollView>
      </View>
      <FlexRow justifyContent="center">
        {data.map((item: any, index: number) => (
          <PaginationDot
            key={`${index}`}
            dotIndex={index}
            activeDotIndex={activeIndexValue}
            borderColor={theme.colors.barPurple}
            borderWidth={1}
            backgroundColor={'transparent'}
          />
        ))}
      </FlexRow>
    </Fragment>
  );
}

const data = [
  {title: 'Total Balance', amount: '$4,500.00', withButtons: true},
  {title: 'Round-Ups', amount: '$500.00', withButtons: false},
  {title: 'Term Servings', amount: '$1,500.00', withButtons: false},
  {title: 'Stocks', amount: '$2,500.00', withButtons: false},
];
