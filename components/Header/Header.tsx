import {
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
  useOutsideClick,
  Wrap
} from "@chakra-ui/react"
import 'font-proxima-nova/style.css'
import { ArrowLeft, Menu as MenuIcon } from "react-feather"
import { useRef } from "react"
import Drawer from "./Drawer"
import Menu from "./Menu"

const Header = () => {
  const ref = useRef<HTMLDivElement>(null)
  const drawerDisclosure = useDisclosure()
  const [isOnDesktop] = useMediaQuery("(min-width: 1200px)")

  useOutsideClick({
    ref,
    handler: drawerDisclosure.onClose,
  })

  return (
    <Flex
      minH={20}
      w='100%'
      maxW='100%'
      bgColor='brand.background'
      justify='center'
    >
      <Flex
        w='100%'
        align='center'
        flexDir={{ base: 'column', xl: 'row' }}
      >
        <Flex
          w={{ base: '100%', xl: '300px' }}
          justify={{ base: 'center', xl: 'unset' }}
          mt={{ base: 4, xl: 'unset' }}
        >
          <Flex
            lineHeight='80px'
            verticalAlign='middle'
            fontSize={24}
          >
            <Text color='brand.black' fontWeight={500}>
              Jeroen van Hattem
            </Text>
          </Flex>
        </Flex>

        {!isOnDesktop && <MenuIcon onClick={() => drawerDisclosure.onToggle()} cursor='pointer' color='black' size={64} />}
        <Menu d={{ base: 'none', lg: 'unset' }} />
        {drawerDisclosure.isOpen && <Drawer drawerDisclosure={drawerDisclosure} />}


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