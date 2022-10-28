import {
  Button,
  FormControl,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';

export function SearchForm() {
  return (
    <FormControl as="form" gap={1} display="flex">
      <Input
        type="text"
        placeholder="Buscar evento"
        flex={1}
        h={12}
        bg={useColorModeValue('gray.100', 'gray.900')}
      />
      <Button type="button" borderRadius={6} h={12} variant="outline">
        <MagnifyingGlass size={20} /> Buscar
      </Button>
    </FormControl>
  );
}
