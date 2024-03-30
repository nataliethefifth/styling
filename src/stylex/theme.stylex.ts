// https://github.com/facebook/stylex/issues/281

import * as stylex from '@stylexjs/stylex';
import { color } from './color.stylex';

// import { light } from './light'; //Will not work

// -- Use this
// export const lightTheme = stylex.createTheme(color, {
//   primaryText: 'red',
//   backgroundColor: 'red',
// });
// -- OR --
// Need to define light var here !! CANNOT use import
const light = {
  primaryText: 'red',
  backgroundColor: 'purple',
};
export const lightTheme = stylex.createTheme(color, light);

// export const darkTheme = stylex.createTheme(color, {
//   primaryText: 'grey',
//   backgroundColor: 'black',
// });
const dark = {
  primaryText: 'grey',
  backgroundColor: 'black',
}
export const darkTheme = stylex.createTheme(color, dark);

const DARK = '@media (prefers-color-scheme: dark)';
export const autoTheme = stylex.createTheme(color, {
  primaryText: { default: light.primaryText, [DARK]: dark.primaryText },
  backgroundColor: { default: light.backgroundColor, [DARK]: dark.backgroundColor },
});

