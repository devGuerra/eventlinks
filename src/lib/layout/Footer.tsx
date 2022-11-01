import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://www.linkedin.com/in/umroberto/"
          isExternal
          rel="noopener noreferrer"
        >
          Roberto Guerra
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
