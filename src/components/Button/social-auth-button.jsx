import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from 'components/buttons/styles';
import { _images_ } from 'assets/images';
import { appColors } from '../../styles/colors';
import { ActivityIndicator } from 'react-native-paper';

const { GoogleIcon, AppleIcon } = _images_;

export default function SocialAuthButton({
  type = 'google',
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: props.diabled
            ? '#313131'
            : type === 'google'
            ? '#4285F4'
            : appColors.BLACK,
        },
      ]}
      {...props}
    >
      <View style={styles.iconWrapper}>
        {/* <AntDesign
          name={type === 'google' ? 'google' : 'apple1'}
          style={styles.icon}
        /> */}
        <View style={styles.logoImageWrapper}>
          <Image
            source={type == 'google' ? GoogleIcon : AppleIcon}
            style={styles.logoImage}
          />
        </View>
      </View>
      <View style={[styles.titleWrapper]}>
        {props.loading ? (
          <ActivityIndicator color={appColors.WHITE} size={'small'} />
        ) : (
          <Text style={styles.title}>
            Sign in with {type == 'google' ? 'Google' : 'Apple'}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
