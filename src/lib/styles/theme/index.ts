import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { sizes } from './sizing';

const customTheme = extendTheme({
  fonts,
  colors,
  sizes,
  config,
  components,
});

export default customTheme;
