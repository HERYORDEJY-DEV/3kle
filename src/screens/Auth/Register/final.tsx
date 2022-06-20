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

export default function RegisterFinal() {
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
      <StyledContentLayout showsVerticalScrollIndicator={false}>
        {/* <StyledAuthTitle>Create your customer account</StyledAuthTitle> */}
        <StyledAuthTitle>Final Step</StyledAuthTitle>
        <View>
          <Controller
            name="username"
            control={control}
            render={() => <InputText label={'Username'} required={true} />}
          />

          <Controller
            name="email"
            control={control}
            render={() => <InputText label={'Email'} required={true} />}
          />

          <Controller
            name="email_repeat"
            control={control}
            render={() => <InputText label={'Repeat Email'} required={true} />}
          />

          <Controller
            name="password"
            control={control}
            render={() => <InputText label={'Password'} required={true} />}
          />

          <Controller
            name="password_repeat"
            control={control}
            render={() => (
              <InputText label={'Repeat Password'} required={true} />
            )}
          />

          <ButtonPrimary
            title="Create Account"
            onPress={() => {}}
            containerStyle={{
              backgroundColor: '#5cb85c',
              borderColor: '#4cae4c',
            }}
          />
        </View>
      </StyledContentLayout>
    </StyledContainerLayout>
  );
}
