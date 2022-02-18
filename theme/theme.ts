
import { extendTheme, ThemeConfig} from "@chakra-ui/react"
import colors from "./colors"

const theme = extendTheme({
  initialColorMode: "dark",
  fonts: {
    heading: 'Yantramanav',
    body: 'Yantramanav'
  },
  colors,
} as ThemeConfig)

export default theme