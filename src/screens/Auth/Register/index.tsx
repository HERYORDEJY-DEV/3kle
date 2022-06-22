import React from 'react';

import {ScrollView, StatusBar, Text, View} from 'react-native';
import {useTheme} from 'styled-components';
import CustomText from '../../../components/General/text';
import {
  StyledContainerLayout,
  StyledContentLayout,
} from '../../../components/General/styles';
import AuthHeader from '../../../components/Auth/header';
import InputText from '../../../components/Input/text';
import {useForm, Controller} from 'react-hook-form';
import ButtonPrimary from '../../../components/Button/primary';
import ButtonText from '../../../components/Button/text';
import {StyledAuthTitle} from '../../../components/Auth/styles';

export default function Register() {
  const theme = useTheme();
  const {control} = useForm();
  return (
    <StyledContainerLayout>
      <StatusBar
        translucent={true}
        backgroundColor={theme.colors.primaryBlue}
        barStyle={'light-content'}
      />
      <AuthHeader />
      <StyledContentLayout
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <StyledAuthTitle>Create your customer account</StyledAuthTitle>
        <StyledAuthTitle sub={true}>
          Registering a customer account is fast and free - no commitments and
          no contracts.
        </StyledAuthTitle>
        <View>
          <Controller
            name="firstName"
            control={control}
            render={() => <InputText label={'First Name'} required={true} />}
          />

          <Controller
            name="lastName"
            control={control}
            render={() => <InputText label={'Last Name'} required={true} />}
          />

          <Controller
            name="mobile"
            control={control}
            render={() => <InputText label={'Mobile'} />}
          />

          <Controller
            name="phone"
            control={control}
            render={() => <InputText label={'Phone'} />}
          />

          <Controller
            name="documentId"
            control={control}
            render={() => <InputText label={'Doument ID'} />}
          />

          <Controller
            name="address"
            control={control}
            render={() => <InputText label={'Address'} required={true} />}
          />

          <Controller
            name="origin"
            control={control}
            render={() => <InputText label={'Origin'} required={true} />}
          />

          <Controller
            name="birthDate"
            control={control}
            render={() => <InputText label={'Birth Date'} />}
          />

          <ButtonPrimary
            title="Proceed"
            onPress={() => {}}
            containerStyle={{
              backgroundColor: '#5cb85c',
              borderColor: '#4cae4c',
            }}
          />
          <ButtonText
            title={
              <CustomText>
                Do you have an account?{' '}
                <CustomText family="semiBold">Login</CustomText>
              </CustomText>
            }
            onPress={() => {}}
          />
        </View>
      </StyledContentLayout>
    </StyledContainerLayout>
  );
}
