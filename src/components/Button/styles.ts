import {StyleSheet, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export const StyledButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  height: 50px;
  background-color: ${p => p.theme.colors.buttonPrimary};
  margin: 20px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const StyledButtonTextContainer = styled(StyledButtonContainer)`
  background-color: transparent;
  border-radius: 0px;
`;

export const StyledButtonIconWrapper = styled(View)`
  height: 50px;
  background-color: ${p => p.theme.colors.buttonPrimary};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// export const StyledItemButtonContainer = styled(StyledButtonContainer)`
//   background-color: ${p => p.theme.colors.itemButton};
//   justify-content: flex-start;
//   width: ${appResponsiveness.width(100)}px;
//   margin: 10px 1px;
// `;

// export const StyledItemButtonIconWrapper = styled(StyledButtonIconWrapper)`
//   background-color: ${p => p.theme.colors.itemButton};
// `;

/*
 backgroundColor: appColors.WHITE,
    // position: 'absolute',
    left: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
*/
