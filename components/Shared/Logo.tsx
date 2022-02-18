import {
  Flex,
  Text,
} from "@chakra-ui/react"
import Theme from "../Theme"

const Logo = () => {
  return (
    <Flex
      pos='relative'
      w='200px'
    >
      <Flex pos='absolute' w='40px' h='40px' borderRadius={8} bgColor={Theme().primary} top='20px' zIndex={1} />

      <Flex
        lineHeight='80px'
        verticalAlign='middle'
        px={2}
        zIndex={2}
        fontSize={28}
        letterSpacing={8}
      >
        <Text color={Theme()._900}>
          {/* <Text color={Theme()._900}> */}
          je
        </Text>
        <Text color={Theme()._100}>
          roen
        </Text>
      </Flex>
    </Flex>
  )
}

export default Logo