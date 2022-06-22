import {View, ImageBackground, ScrollView, Animated} from 'react-native';
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

const responsiveWidth = responsive.width(100);

const {FamlyPlusDashboard} = Images;

const fullScreenWidth = responsive.width(100);

export default function FamilyPlusDashboardCard() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const renderPagination = () => (
    <FlexRow justifyContent="center">
      {data.map((item: any, index: number) => (
        <MCI
          key={index}
          name={
            currentIndex == index
              ? 'checkbox-blank-circle-outline'
              : 'checkbox-blank-circle'
          }
          size={10}
          color={theme.colors.barPurple}
          style={styles.paginationIcon}
        />
      ))}
    </FlexRow>
  );

  const onScroll = (contentOffset: {x: number; y: number}) => {
    const {x} = contentOffset;
    const index = x / Number(responsive.width(100));
    setCurrentIndex(Math.ceil(index));
  };

  return (
    <Fragment>
      <View style={{minHeight: 193}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          snapToInterval={+fullScreenWidth}
          onScroll={Animated.event([], {
            listener: (event: any) => {
              onScroll(event?.nativeEvent?.contentOffset);
            },
            useNativeDriver: false,
          })}
          style={{width: Number(responsiveWidth)}}
        >
          {data.map((item: any, index: number) =>
            renderContent({...item, index}),
          )}
        </ScrollView>
      </View>
      {renderPagination()}
    </Fragment>
  );
}

const data = [
  {title: 'Total Balance', amount: '$4,500.00', withButtons: true},
  {title: 'Round-Ups', amount: '$500.00', withButtons: false},
  {title: 'Term Servings', amount: '$1,500.00', withButtons: false},
  {title: 'Stocks', amount: '$2,500.00', withButtons: false},
];
