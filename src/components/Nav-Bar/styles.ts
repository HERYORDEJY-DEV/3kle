import {Pressable, View} from 'react-native';
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
