import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import type { FormikHelpers } from 'formik';
import { Formik, Field, Form } from 'formik';

interface Values {
  email: string;
}

export default function ForgotPasswordForm(): JSX.Element {
  return (
    <Flex
      // minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w="full"
        maxW="md"
        bg={useColorModeValue('white', 'gray.700')}
        rounded="xl"
        boxShadow="lg"
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}
        >
          You&apos;ll get an email with a reset link
        </Text>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              // eslint-disable-next-line no-alert
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <Stack spacing={6}>
              <FormControl id="email" isRequired>
                <Input
                  as={Field}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your-email@example.com"
                  _placeholder={{ color: 'gray.500' }}
                />
              </FormControl>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit"
              >
                Request Reset
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Stack>
    </Flex>
  );
}
