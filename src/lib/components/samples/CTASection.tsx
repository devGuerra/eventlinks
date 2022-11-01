import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Link href="/dashboard">
          <Button leftIcon={<AiFillGithub />} size="sm" cursor="pointer">
            Events
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
