import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from '@/components/form/Input'

function Login() {
  const x = true
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg={x ? "gray.800" : "gray.600"}
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" placeholder="seu@email.com" />
          <Input name="password" label="Senha" type="password" placeholder="*********" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  );
};

export default Login;
