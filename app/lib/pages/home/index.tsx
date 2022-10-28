import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import CTASection from '../../components/samples/CTASection';
import SomeImage from '../../components/samples/SomeImage';
import SomeText from '../../components/samples/SomeText';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Home;