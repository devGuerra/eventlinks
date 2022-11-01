import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

interface Transacion {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transacion[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({
  transactions: [],
} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transacion[]>([]);

  async function loadTransactions() {
    // const response = await fetch('http://localhost:1455/transactions');
    const response = {
      transactions: [
        {
          id: 1,
          description: 'string',
          type: 'income',
          price: 2.99,
          category: 'string',
          createdAt: 'new Date().toISOString()',
        },
      ],
    };
    const data = response.transactions as Transacion[];
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
