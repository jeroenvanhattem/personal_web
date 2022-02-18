import { Flex, Text, Wrap } from "@chakra-ui/react"

const DrawerItem = (props: any) => {
  const { children, cursor} = props
  return (
    <Text fontSize={36} my={4} cursor={cursor}>
      {children}
    </Text>
  )
}

const Drawer = (props: any) => {
  const { drawerDisclosure } = props
  return (
    <Flex
      h='100vh'
      w='100vw'
      pos='absolute'
      justify='center'
      fontWeight={600}
      color='brand.black'
      bgColor={'brand.background'}
      zIndex={2}
    >
      <Flex
        maxW='90%'
        justify='center'
        flexDir='column'
      >
        <DrawerItem>
          WORK
        </DrawerItem>
        <DrawerItem>
          ABOUT
        </DrawerItem>
        <DrawerItem>
          SKILLS
        </DrawerItem>
        <DrawerItem>
          CONTACT
        </DrawerItem>
        <DrawerItem cursor='pointer' onClick={() => drawerDisclosure.onClose()}>
          CLOSE
        </DrawerItem>
      </Flex>
    </Flex>
  )
}

export default Drawer