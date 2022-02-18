import { Flex, Text, Wrap } from "@chakra-ui/react"

const Menu = (props: any) => {
  return (
    <Flex
      lineHeight='80px'
      verticalAlign='middle'
      flexGrow={1}
      justify='center'
      fontWeight={600}
      color='brand.black'
      {...props}
    >
      <Wrap
        maxW='90%'
        spacing={{ base: 4, xl: 16 }}
        justify='center'
      >
        <Text>
          HOME
        </Text>
        <Text>
          WORK
        </Text>
        <Text>
          ABOUT
        </Text>
        <Text>
          SKILLS
        </Text>
        <Text>
          CONTACT
        </Text>
      </Wrap>
    </Flex>
  )
}

export default Menu