'use strict';

import * as React from 'react';
import { createRoot } from 'react-dom/client';

import * as stylex from '@stylexjs/stylex';
import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import { sizes } from '@stylexjs/open-props/lib/sizes.stylex';
import { fonts } from '@stylexjs/open-props/lib/fonts.stylex';

import { color } from './stylex/color.stylex';
import { lightTheme, darkTheme, autoTheme } from './stylex/theme.stylex';

const styles = stylex.create({
  main: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink7,
  },
  card: {
    backgroundColor: colors.blue9,
    padding: sizes.spacing5,
    borderRadius: sizes.spacing2,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    color: colors.gray0,
    fontFamily: fonts.mono,
  },
});

const st = stylex.create({
  test1: {
    fontSize: 24,
    color: 'white',
    backgroundColor: color.backgroundColor
  }
});

function App() {
  const [isLightTheme, setIsLightTheme] = React.useState(true);
  return (
    <div {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.card)}>
        <span>Blue rectangle</span>
      </div>
      <div {...stylex.props(isLightTheme ? lightTheme : darkTheme, st.test1)}>Test1</div>
      <button onClick={() => setIsLightTheme(prev => !prev)}>Test</button>
      <div {...stylex.props(autoTheme, st.test1)}>Test2</div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App />);
