import {View} from 'react-native';
import React from 'react';
import {StyledHypotheticalContainer, styles} from './styles';
import CustomText from '../General/text';
import {FlexRow} from '../General/styles';
import BarChart from '../Chat/bar';

export default function FamilyPlusHypothetical() {
  return (
    <StyledHypotheticalContainer>
      <View>
        <View style={styles.hypoTitle}>
          <CustomText textAlign={'center'} size={'20'} height={29}>
            Hypothetical projection of{'\n'}
            <CustomText
              family="bold"
              textAlign={'center'}
              size={'20'}
              height={29}
            >
              $12000
            </CustomText>{' '}
            at{' '}
            <CustomText
              family="bold"
              textAlign={'center'}
              size={'20'}
              height={29}
            >
              age 16
            </CustomText>
          </CustomText>
        </View>
        <FlexRow style={styles.io}>
          <CustomText size="15">Investment: $550</CustomText>
          <CustomText size="15">Returns: $12,000</CustomText>
        </FlexRow>
      </View>
      <BarChart />
    </StyledHypotheticalContainer>
  );
}
