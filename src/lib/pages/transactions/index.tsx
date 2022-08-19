import { Box, Flex } from '@chakra-ui/react';
import { useContextSelector } from 'use-context-selector';

import { SearchForm } from '../../../components/SearchForm';
import { Summary } from '../../../components/Summary';
import { EventCardEdit } from 'components/EventCardEdit';
import { EventsContext } from 'contexts/EventsContext';

export default function Transactions() {
  const events = useContextSelector(EventsContext, (ctx) => {
    return ctx.events;
  });

  return (
    <Flex w="full" direction="column">
      <Summary />
      <Box mt={10} mx={6}>
        <Flex direction="column">
          <SearchForm />
          <Box mt={3}>
            <EventCardEdit data={events} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
