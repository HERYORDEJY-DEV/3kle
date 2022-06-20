import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import {
  styles,
  StyledItemButtonContainer,
  StyledItemButtonIconWrapper,
  StyledButtonTitle,
} from 'components/buttons/styles';
import { _images_ } from 'assets/images';
import { appColors } from '../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { appFontFamily, appFontSize } from '../../styles/fonts';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../general/text';
import ShadowWrap from 'components/general/shadow-wrap';
import { useTheme } from 'styled-components';

const { GoogleIcon, AppleIcon } = _images_;

export default function ItemLinkButton({
  title,
  icon,
  titleColor,
  routeScreen,
  noArrow = false,
  ...props
}) {
  const navigation = useNavigation();
  const theme = useTheme();

  const onPress = () => {
    if (!props.onPress) {
      navigation.navigate(routeScreen);
      // console.log(`\n\n\nreminder\t\t`, 'reminder');
      return;
    }
    // console.log(`\n\n\nreminder\t\t`, 'not reminder');
    props.onPress();
  };

  return (
    <ShadowWrap>
      <StyledItemButtonContainer
        onPress={onPress}
        style={[
          {
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 20,
            marginVertical: 5,
          },
        ]}
        {...props}
      >
        {icon && (
          <StyledItemButtonIconWrapper>{icon}</StyledItemButtonIconWrapper>
        )}

        <View
          style={[
            styles.titleWrapper,
            { alignItems: 'flex-start', paddingHorizontal: 10 },
          ]}
        >
          <StyledButtonTitle
            numberOfLines={1}
            color={theme.colors.itemButtonTitle}
            // weight={'SEMI_BOLD'}
            // size={appFontSize.MD}
          >
            {title}
          </StyledButtonTitle>
          {/* <CustomText
            numberOfLines={1}
            color={appColors.BLUE}
            weight={'SEMI_BOLD'}
            size={appFontSize.MD}
          >
            {title}
          </CustomText> */}
        </View>
        {!noArrow && (
          <MaterialCommunityIcons name={'chevron-right'} size={20} />
        )}
      </StyledItemButtonContainer>
    </ShadowWrap>
  );
}
