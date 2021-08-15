// styled.d.ts
import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}

type palette = 'red' | 'green' | 'blue' | 'grey' | 'bg'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      // eslint-disable-next-line no-unused-vars
      [x in palette]: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
    }
  }
}
