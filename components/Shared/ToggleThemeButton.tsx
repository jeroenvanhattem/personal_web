import {
  IconButton,
  useColorMode,
} from "@chakra-ui/react"
import {
  Sun,
  Moon
} from 'react-feather'
import Theme from "../Theme"

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      bgColor={Theme()._800}
      color={Theme()._100}
      aria-label='Toggle theme'
      icon={colorMode === 'light' ? <Sun size={14} /> : <Moon size={14} />}
      onClick={toggleColorMode}
    />
  )
}

export default ToggleThemeButton