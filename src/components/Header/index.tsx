import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext';
import { Flex, Text, Input, Icon, HStack, Box, Avatar, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine, RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';

function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h={["10", "20"]}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />

      { isWideScreen && <SearchBox />}

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Lucas Ferronato</Text>
            <Text color="gray.300" fontSize="small">lucas@gmail.com</Text>
          </Box>
          <Avatar size="md" name="Lucas Ferronato" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
