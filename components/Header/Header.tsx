import {
  Flex,
  Text,
  Wrap
} from "@chakra-ui/react"
import 'font-proxima-nova/style.css'

const Header = () => {
  return (
    <Flex
      h={20}
      w='100%'
      bgColor='brand.background'
      justify='center'
    >
      <Flex
        w='100%'
        justify='center'
      >
        <Flex
          w='300px'
        >
          <Flex
            lineHeight='80px'
            verticalAlign='middle'
            px={2}
            zIndex={2}
            fontSize={24}
          >
            <Text color='brand.black' fontWeight={600}>
              Jeroen van Hattem
            </Text>
          </Flex>
        </Flex>

        <Flex
          lineHeight='80px'
          verticalAlign='middle'
          flexGrow={1}
          justify='center'
          fontWeight={600}
          color='brand.black' 
        >
          <Wrap
            spacing={16}
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


        <Flex
          w='300px'
          align='center'
          justify='flex-end'
        >
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header