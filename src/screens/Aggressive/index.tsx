import {View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {
  FlexRow,
  StyledContainerLayout,
  StyledContentLayout,
} from '../../components/General/styles';
import NavBar from '../../components/Nav-Bar';
import {StyledScreenTitle} from '../FamilyPlus/styles';
import {useTheme} from 'styled-components';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import PortfolioBreakDown from '../../components/Aggressive/breakdown';
import PortfolioSelected from '../../components/Button/portfolio-selected';
import Svgs from '../../assets/svg';
import {VictoryPie} from 'victory-native';

const {QuestionC} = Svgs;

export default function AggressivePortfolio() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(2);

  const data = [...Array(4).keys()];

  const renderPagination = () => (
    <FlexRow justifyContent="center">
      {data.map((item: any, index: number) => (
        <MCI
          key={index}
          name={
            currentIndex == index
              ? 'checkbox-blank-circle'
              : 'checkbox-blank-circle-outline'
          }
          size={currentIndex == index ? 22 : 16}
          color={'#1826D0'}
          style={styles.paginationIcon}
        />
      ))}
    </FlexRow>
  );

  const pieData = [
    {x: 'Large Company\nStocks(VOO)', y: 55, fill: theme.colors.pieBlue1},
    {x: 'Medium Company\nStocks(IJH)', y: 10, fill: '#7982FA'},
    {x: 'Small Company\nStocks(IJR)', y: 5, fill: '#C2C7FF'},
    {x: 'International\nCompany Stocks\n(IXUS)', y: 30, fill: '#EEEFFF'},
  ];

  return (
    <StyledContainerLayout>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <NavBar
        showBackButton={true}
        renderRight={<QuestionC />}
        theme={'blue'}
      />
      <StyledContentLayout
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <StyledScreenTitle
          family="bold"
          color={theme.colors.textBlue}
          size={'24'}
          height={36}
        >
          Aggressive Portfolio
        </StyledScreenTitle>
        {renderPagination()}
        <View style={{alignItems: 'center'}}>
          <VictoryPie
            height={250}
            innerRadius={30}
            radius={70}
            style={{
              data: {fill: ({datum}) => datum.fill},

              labels: {
                fontSize: 12,
                fill: theme.colors.textBlue,
                fontFamily: theme.fontFamily.semiBold,
                flex: 1,
                flexWrap: 'wrap',
                flexGrow: 0,
              },
            }}
            data={pieData}
          />
        </View>
        <PortfolioBreakDown />
        <PortfolioSelected />
      </StyledContentLayout>
    </StyledContainerLayout>
  );
}
