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

export default function Login() {
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
        contentContainerStyle={{
          // justifyContent: 'center',
          height: '100%',
          paddingVertical: 30,
        }}
      >
        <View>
          <Controller
            name="username"
            control={control}
            render={() => (
              <InputText prefixIcon={'person'} placeholder={'Username'} />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={() => (
              <InputText
                prefixIcon={'lock'}
                placeholder={'Password'}
                type={'auth'}
              />
            )}
          />
          <ButtonText
            title="Forgot Password?"
            onPress={() => {}}
            containerStyle={{justifyContent: 'flex-end'}}
          />
          <ButtonPrimary title="Login" onPress={() => {}} />
          <ButtonText
            title={
              <CustomText>
                Don't have an account?{' '}
                <CustomText family="semiBold">Register</CustomText>
              </CustomText>
            }
            onPress={() => {}}
          />
        </View>
      </StyledContentLayout>
    </StyledContainerLayout>
  );
}
