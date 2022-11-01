import {
  Button,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../assets/logo.svg';
import { NewTransactionModal } from '../components/NewEventModal';

import ThemeToggle from './ThemeToggle';

export function Header() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Heading pb={32} bg={useColorModeValue('gray.600', 'gray.900')}>
      <Flex
        maxW="container.lg"
        align="center"
        justify="space-between"
        margin="0 auto"
        pt={8}
        px={6}
        direction={['column', 'row']}
      >
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Flex align="center" justify={['space-between']} w={['100%', 'auto']}>
          <ThemeToggle />
          <Button
            h={12}
            borderRadius={6}
            ml={4}
            bg={useColorModeValue('green.400', 'green.600')}
            onClick={onOpen}
            fontSize={['sm', 'md']}
          >
            Adicionar Evento
          </Button>

          <NewTransactionModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Flex>
    </Heading>
  );
}
