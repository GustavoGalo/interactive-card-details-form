export const theme = {
  breakingPoints: {
    mobile: 768,
    desktop: 1440,
    smallDesktop: 1080,
  },
  colors: {
    red: 'hsl(0, 100%, 66%)',
    white: 'hsl(0, 0%, 100%)',
    lightGrayishViolet: 'hsl(270, 3%, 87%)',
    darkGrayishViolet: 'hsl(279, 6%, 55%)',
    veryDarkViolet: 'hsl(278, 68%, 11%)',
  },
  linearGradient: {
    from: 'hsl(249, 99%, 64%)',
    to: 'hsl(278, 94%, 30%)',
  },
};

export type ITheme = typeof theme;
