import type { ReactNode } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { createContext } from 'use-context-selector';

interface Event {
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
}

interface EventsContextType {
  events: Event[];
}

interface EventsProviderProps {
  children: ReactNode;
}

export const EventsContext = createContext({} as EventsContextType);

export function EventsProvider({ children }: EventsProviderProps) {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = useCallback(async () => {
    const response = {
      events: [
        {
          id: 0,
          date: '2022-08-18T21:00:00',
          type: 'paid',
          eventName: 'Evento de teste',
          local: {
            name: 'Casa de Tetro',
            address: {
              street: 'Rua dos Cajueiros',
              number: '0',
              city: 'São Paulo',
              state: 'SP',
              neighborhood: 'Bela Vista',
            },
          },
          link: 'https://www.google.com.br/',
          createdAt: new Date('2022-08-10').toISOString(),
        },
        {
          id: 1,
          date: '2022-08-28T18:00:00',
          type: 'paid',
          eventName: 'Evento de teste',
          local: {
            name: 'Casa de Shows',
            address: {
              street: 'Rua dos Bobos',
              number: '0',
              city: 'Brasilia',
              state: 'DF',
              neighborhood: 'Asa Norte',
            },
          },
          link: 'https://www.google.com.br/',
          createdAt: new Date('2022-08-10').toISOString(),
        },
      ],
    };

    setEvents(response.events);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
}
