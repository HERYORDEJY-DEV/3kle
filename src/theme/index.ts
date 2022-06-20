const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#FFFFFF',
  blue: '#2336FF',
  gray: '#7C7F9F',
  tomato: '#F4586F',
  error: '#FF647C',
};

const customRadius = (number: number) => `${number}px`;
const customSpacing = (space: number) => `${space}px`;
const customSize = (size: number) => `${size}px`;

export const lightTheme = {
  colors: {
    ...palette,
    background: '#FAFAFA',
    foreground: palette.black,
    primary: palette.blue,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    textLabel: palette.gray,
    tomato: palette.tomato,
    deepBlue: palette.blue,
    deepBlueAlt: '#D1D6E9',
    primaryBlue: '#2494F2',
    text: '#555555',
    buttonPrimary: '#4D90FD',
    buttonTitle: '#FAFAFA',
  },

  fontFamily: {
    semiBold: 'Mulish-SemiBold',
    bold: 'Mulish-Bold',
    medium: 'Mulish-Medium',
    regular: 'Mulish-Regular',
    light: 'Mulish-Light',
  },
  spacing: {
    n: '0px',
    s: '8px',
    m: '16px',
    l: '24px',
    xl: '40x',
    bt: '14px',
    custom: customSpacing,
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },

  fontSize: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    custom: customSize,
  },
  borders: {
    light: '1px solid rgba(228, 228, 228, 0.6)',
    primary: ' 1px solid #2082D5',
  },
  background: {
    primary: {
      backgroundColor: '#2494F2',
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: palette.black,
    foreground: palette.white,
    text: palette.white,
  },
};

export type CustomThemeType = typeof lightTheme;
