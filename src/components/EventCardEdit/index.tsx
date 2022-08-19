import {
  Button,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { Eye } from 'phosphor-react';

import useWindowSize from 'hooks/useWindowSize';
import { dateFormatter, timeFormatter } from 'utils/formatter';

type EventCardEditProps = {
  id: number;
  date: string;
  eventName: string;
  type: 'free' | 'paid' | string;
  local: {
    name: string;
    address: {
      street: string;
      number: string;
      city: string;
      state: string;
      neighborhood: string;
    };
  };
  link: string;
  createdAt: string;
};

type Events = {
  data: EventCardEditProps[];
};

export function EventCardEdit({ data }: Events) {
  const size = useWindowSize();
  const bgColor = useColorModeValue('gray.200', 'gray.900');

  if (!data.length) {
    return (
      <Table mt={8} variant="simple">
        <Tbody>
          <Td>Nenhum Show encontrado</Td>
        </Tbody>
      </Table>
    );
  }

  if (size.width < 700) {
    return (
      <Stack>
        {data.map((event) => (
          <Flex
            direction="column"
            justify="center"
            p={5}
            gap={3}
            w="100%"
            bg="gray.600"
            borderRadius={6}
          >
            <Flex direction="column" gap={1} color="gray.300">
              <Flex justify="space-between" align="center">
                <span>{event.local.name}</span>
                <Button variant="link">
                  <Eye size={24} color="#00b37e" />
                </Button>
              </Flex>
              <span>{timeFormatter.format(new Date(event.date))}</span>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              gap={4}
              color="gray.500"
            >
              <Flex align="center" gap={1}>
                {event.local.address.city} - {event.local.address.state}
              </Flex>
              <Flex align="center" gap={1}>
                {dateFormatter.format(new Date(event.createdAt))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Stack>
    );
  }

  return (
    <Table mt={8} variant="simple">
      <Tbody>
        {data.map((event) => (
          <Tr key={event.id} bg={bgColor}>
            <Td width="50%">{event.local.name}</Td>
            <Td>{timeFormatter.format(new Date(event.date))}</Td>
            <Td whiteSpace="nowrap">
              {event.local.address.city} - {event.local.address.state}
            </Td>
            <Td>{dateFormatter.format(new Date(event.createdAt))}</Td>
            <Td>
              <Button variant="link">
                <Eye size={24} color="#00b37e" />
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
