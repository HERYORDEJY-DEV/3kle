import {StyleSheet} from 'react-native';
import styled from 'styled-components';

export const styles = StyleSheet.create({
  breakdownItem: {
    height: 65,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 20,
    paddingHorizontal: 10,
    flex: 1,
  },

  breakdownItemBg: {...StyleSheet.absoluteFillObject, height: 65},
  breakdownContainer: {
    margin: 20,
  },
});

// export const  = styled
