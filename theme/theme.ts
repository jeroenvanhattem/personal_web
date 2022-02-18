
import { extendTheme, ThemeConfig} from "@chakra-ui/react"
import colors from "./colors"

const theme = extendTheme({
  fonts: {
    heading: 'Yantramanav',
    body: 'Yantramanav'
  },
  colors,
} as ThemeConfig)

export default theme