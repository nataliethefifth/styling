'use strict';

import { h, render } from 'preact';
import { useState } from 'preact/hooks';

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

const calc = (x: number, y: number): number => {
  return x + y;
}

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <div {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.card)}>
        <span>Blue rectangle</span>
      </div>
      <div {...stylex.props(isLightTheme ? lightTheme : darkTheme, st.test1)}>Test1</div>
      <button onClick={() => setIsLightTheme(prev => !prev)}>Test CB</button>
      <div {...stylex.props(autoTheme, st.test1)}>Test2</div>
      <div {...stylex.props(autoTheme, st.test1)}>{`calc => ${calc(10, 20)}`}</div>
    </div>
  );
}

render(<App />, document.getElementById("app")!);
