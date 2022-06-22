import {Pressable, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

export const StyledNavBarContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const StyledButtonIconContainer = styled(Pressable)`
  height: 50px;
  width: 50px;
`;
