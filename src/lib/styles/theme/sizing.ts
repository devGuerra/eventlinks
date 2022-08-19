import type { DeepPartial, Theme } from '@chakra-ui/react';

export const extendSizes: DeepPartial<Theme['sizes']> = {
  container: {
    lg: '1120px',
  },
};

const overridenChakraSizes: DeepPartial<Theme['sizes']> = {};

export const sizes = {
  ...overridenChakraSizes,
  ...extendSizes,
};
