import 'styled-components';
import {CustomThemeType} from './index';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeType {}
}
