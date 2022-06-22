import {View, Text, StatusBar, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  FlexRow,
  StyledContainerLayout,
  StyledContentLayout,
} from '../../../components/General/styles';
import CustomText from '../../../components/General/text';
import NavBar from '../../../components/Nav-Bar';
import {
  StyledRenderContent,
  StyledGetStartedTitle,
  StyledGetStartedSubtitle,
  styles,
} from './styles';
import Svgs from '../../../assets/svg';
import responsive from '../../../utils/responsive';
import {useTheme} from 'styled-components';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonPrimary from '../../../components/Button/primary';
import {useNavigation} from '@react-navigation/native';

const {GetStartedCoins} = Svgs;

const responsiveWidth = responsive.width(100);

export default function GetStarted() {
  const theme = useTheme();
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [...Array(4).keys()];

  const renderContent = (item: any, index: number) => (
    <StyledRenderContent key={index}>
      <GetStartedCoins />
      <StyledGetStartedTitle>
        3KLE invests your money{'\n'}intelligently in stocks
      </StyledGetStartedTitle>
      <StyledGetStartedSubtitle>
        Build, perserve and manage your family{'\n'}wealth with stocks
        investment
      </StyledGetStartedSubtitle>
    </StyledRenderContent>
  );

  const renderPagination = () => (
    <FlexRow justifyContent="center">
      {data.map((item: any, index: number) => (
        <MCI
          key={index}
          name={'checkbox-blank-circle'}
          size={10}
          color={currentIndex == index ? theme.colors.barPurple : '#C9C9CA'}
          // color={currentIndex == index ? theme.colors.barPurple : '#C9C9CA'}
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
    <StyledContainerLayout>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <NavBar showCloseButton={true} />
      <View style={{minHeight: responsive.height(60)}}>
        <StyledContentLayout
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          snapToInterval={Number(responsiveWidth)}
          scrollEventThrottle={16}
          onScroll={Animated.event([], {
            listener: (event: any) => {
              onScroll(event?.nativeEvent?.contentOffset);
            },
            useNativeDriver: false,
          })}
          style={{width: Number(responsiveWidth)}}
        >
          {data.map((item: any, index: number) => renderContent(item, index))}
        </StyledContentLayout>
      </View>
      {renderPagination()}
      <ButtonPrimary
        title={'Get Started'}
        onPress={() => navigation.navigate({name: 'FamilyPlusDashboard'})}
      />
    </StyledContainerLayout>
  );
}
