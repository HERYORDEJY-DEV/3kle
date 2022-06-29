/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from 'styled-components';
import {lightTheme} from './src/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
