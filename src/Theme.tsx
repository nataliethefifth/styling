'use strict';

import { h, render } from 'preact';
import { useState } from 'preact/hooks';

import * as stylex from '@stylexjs/stylex';
import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import { sizes } from '@stylexjs/open-props/lib/sizes.stylex';
import { fonts } from '@stylexjs/open-props/lib/fonts.stylex';

import { color } from './stylex/color.stylex';
import { lightTheme, darkTheme, autoTheme } from './stylex/theme.stylex';

import IconAccessibility from '~icons/carbon/accessibility';

const styles = stylex.create({
  main: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
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


function Theme() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <div {...stylex.props(styles.main)}>
      <div >
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zM10 5.5v6H8.5V7H7V5.5zM16.5 7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H12V10h3V9h-3V5.5h4.5zm-1 7H17v1.5h-1.5z" /></svg>
      </div>
      <IconAccessibility />
      <div {...stylex.props(styles.card)}>
        <span>Blue rectangle cc</span>
      </div>
      <div {...stylex.props(isLightTheme ? lightTheme : darkTheme, st.test1)}>Test1</div>
      <button onClick={() => setIsLightTheme(prev => !prev)}>Test CB</button>
      <div {...stylex.props(autoTheme, st.test1)}>Test2</div>
    </div>
  );
}

render(<Theme />, document.getElementById("theme")!);
