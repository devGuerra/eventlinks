import { Box, Flex, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

export function Summary() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="2rem" overflow="auto" px={6}>
      <Box
        bg={useColorModeValue('gray.300', 'gray.600')}
        padding="2rem"
        borderRadius={6}
        minW={80}
      >
        <Flex align="center" justify="space-between">
          <Text>Próximo Evento</Text>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Flex>
        <Text fontWeight="bold" fontSize={[24, 32]}>
          18/08/2022
        </Text>
      </Box>

      <Box
        bg={useColorModeValue('gray.300', 'gray.600')}
        padding="2rem"
        borderRadius={6}
        minW={80}
      >
        <Flex align="center" justify="space-between">
          <Text>Visualizações</Text>
          <ArrowCircleDown size={32} color="#f75a68" />
        </Flex>

        <Text fontWeight="bold" fontSize={[24, 32]}>
          452
        </Text>
      </Box>

      <Box
        bg={useColorModeValue('gray.300', 'gray.600')}
        padding="2rem"
        borderRadius={6}
        minW={80}
      >
        <Flex align="center" justify="space-between">
          <Text>Shows Esse Mês</Text>
          <CurrencyDollar size={32} color="#fff" />
        </Flex>

        <Text fontWeight="bold" fontSize={[24, 32]}>
          2 shows
        </Text>
      </Box>
    </Grid>
  );
}
