import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContextSelector } from 'use-context-selector';

import { EventCardEdit } from '../../../components/EventCardEdit';
import { SearchForm } from '../../../components/SearchForm';
import { Summary } from '../../../components/Summary';
import { EventsContext } from '../../../contexts/EventsContext';

export default function Dashboard() {
  const events = useContextSelector(EventsContext, (ctx) => {
    return ctx.events;
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}
