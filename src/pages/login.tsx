import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import type { FormikHelpers } from 'formik';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

interface Values {
  email: string;
  password: string;
}

export default function SimpleCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      // minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.600">
            to enjoy all of our cool <Link color="blue.400">features</Link> ✌️
          </Text>
        </Stack>
        <Formik
          initialValues={{
            email: '',
            password: '',
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
            <Box
              rounded="lg"
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow="lg"
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input as={Field} type="email" id="email" name="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      as={Field}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                    />
                    <InputRightElement h="full">
                      <Button
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align="start"
                    justify="right"
                  >
                    <Link color="blue.400" href="/forgot-password">
                      Forgot password?
                    </Link>
                  </Stack>
                  <Button
                    bg="green.400"
                    color="white"
                    _hover={{
                      bg: 'green.500',
                    }}
                    type="submit"
                  >
                    Sign in
                  </Button>
                  <Button
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    as={Link}
                    href="/register"
                  >
                    Register Account
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Form>
        </Formik>
      </Stack>
    </Flex>
  );
}
