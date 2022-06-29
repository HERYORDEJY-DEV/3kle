import {View, StatusBar, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {
  FlexRow,
  StyledContainerLayout,
} from '../../../components/General/styles';
import NavBar from '../../../components/Nav-Bar';
import {
  StyledGetStartedTitle,
  StyledGetStartedSubtitle,
  styles,
} from './styles';
import Svgs from '../../../assets/svg';
import responsive from '../../../utils/responsive';
import {useTheme} from 'styled-components';
import ButtonPrimary from '../../../components/Button/primary';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
} from 'react-native-reanimated';
import {RootStackScreenProps} from '../../../navigation/types';
import PaginationDot from '../../../components/General/pagin-dot';

const {GetStartedCoins} = Svgs;

const {width} = Dimensions.get('window');

export default function GetStarted() {
  const data = [...Array(4).keys()];
  const theme = useTheme();
  const navigation =
    useNavigation<RootStackScreenProps<'GetStarted'>['navigation']>();

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

  const renderContent = (item: any, index: number) => (
    <Animated.View key={index} style={styles.renderContainer}>
      <GetStartedCoins />
      <StyledGetStartedTitle>
        3KLE invests your money{'\n'}intelligently in stocks
      </StyledGetStartedTitle>
      <StyledGetStartedSubtitle>
        Build, perserve and manage your family{'\n'}wealth with stocks
        investment
      </StyledGetStartedSubtitle>
    </Animated.View>
  );

  return (
    <StyledContainerLayout>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <NavBar showCloseButton={true} />
      <View style={{minHeight: responsive.height(60)}}>
        <Animated.ScrollView
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          snapToInterval={Math.round(width)}
          scrollEventThrottle={16}
          onScroll={onScrollHandler}
        >
          {data.map((item: any, index: number) => renderContent(item, index))}
        </Animated.ScrollView>
      </View>
      {/* {renderPagination()} */}
      <FlexRow justifyContent="center">
        {data.map((_, index) => (
          <PaginationDot
            key={`${index}`}
            dotIndex={index}
            activeDotIndex={activeIndexValue}
          />
        ))}
      </FlexRow>
      <ButtonPrimary
        title={'Get Started'}
        onPress={() =>
          navigation.navigate('FamilyPlusDashboard', {
            id: '',
            message: '',
            title: '',
          })
        }
      />
    </StyledContainerLayout>
  );
}
