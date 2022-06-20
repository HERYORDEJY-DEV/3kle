import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';

import { styles } from 'components/buttons/styles';
import { appColors } from '../../styles/colors';

export default function SecondaryButton({
  title = 'Press me',
  onPress,
  containerStyle,
  loading,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: props.disabled ? '#313131' : appColors.WHITE,
          justifyContent: 'center',
          borderWidth: 2,
        },
        containerStyle,
      ]}
      {...props}
    >
      <Text style={[styles.title, { color: appColors.BLACK }]}>
        {title}
        {'  '}
      </Text>
      {loading && (
        <ActivityIndicator
          size={'small'}
          color={appColors.BLACK}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}
