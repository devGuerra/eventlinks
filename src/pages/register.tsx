import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import type { FormikHelpers } from 'formik';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Sign up
          </Heading>
          <Text fontSize="lg" color="gray.600">
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
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
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        as={Field}
                        type="text"
                        id="firstName"
                        name="firstName"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        as={Field}
                        type="text"
                        id="lastName"
                        name="lastName"
                      />
                    </FormControl>
                  </Box>
                </HStack>
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
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align="center">
                    Already a user?{' '}
                    <Link color="blue.400" href="/login">
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
