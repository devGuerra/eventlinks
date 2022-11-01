import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box h="100vh">
      <Header />
      <Box as="main" maxW="container.lg" margin="0 auto">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
