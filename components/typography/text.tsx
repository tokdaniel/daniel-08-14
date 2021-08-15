import styled, { CSSProperties } from 'styled-components'

import { Color } from 'config/theme.config'

import { styles, Variant } from './styles'

type Props = {
  variant: Variant
  textColor?: Color
  padding?: CSSProperties['padding']
  margin?: CSSProperties['margin']
}

export const Text = styled.div<Props>`
  ${({ variant }) => styles[variant]};
  color: ${({ textColor, theme }) => {
    if (!textColor) return theme.palette.grey[200]
    const [color, shade] = textColor

    return theme.palette[color][shade]
  }};
  margin: ${({ margin }) => (margin ? margin : 'initial')};
  padding: ${({ padding }) => (padding ? padding : 'initial')};
`

export default Text
