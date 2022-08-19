import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export function NewTransactionModal({ isOpen, onClose }: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent minW={['none', 'lg']} mx={[6, 0]}>
        <ModalHeader>Adicionar Evento</ModalHeader>
        <ModalCloseButton />
        <FormControl>
          <Stack p={6} spacing={6}>
            <Stack>
              <Input type="text" placeholder="Nome do Evento" required h={14} />
              <Input type="number" placeholder="Local" required h={14} />
              <Input placeholder="Data" type="datetime-local" required h={14} />
              <Input type="url" placeholder="Link do evento" required h={14} />
            </Stack>
            <Button
              type="submit"
              borderRadius={6}
              h={14}
              w="full"
              mt={4}
              bg={useColorModeValue('green.400', 'green.600')}
            >
              Cadastrar
            </Button>
          </Stack>
        </FormControl>
      </ModalContent>
    </Modal>
  );
}
