import { css } from 'styled-components'

const font = css`
  font-family: 'Lato', 'sans-serif';
`

const h1 = css`
  ${font};
  font-size: 80px;
  font-weight: 500;
`

const h2 = css`
  ${font};
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 72.54px;
`

const h3 = css`
  ${font};
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48.84px;
`

const h4 = css`
  ${font};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41.51px;
`

const h5 = css`
  ${font};
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 35.41px;
  letter-spacing: 2.6px;
`

const h6 = css`
  ${font};
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 35.41px;
  letter-spacing: 19.54px;
`

const subtitle1 = css`
  ${font};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.54px;
`

const subtitle2 = css`
  ${font};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 17.09px;
  letter-spacing: 2px;
`

const body1 = css`
  ${font};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
`
const body2 = css`
  ${font};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 14.65px;
`

const body3 = css`
  ${font};
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12.21px;
`

const label = css`
  ${body3}
  text-transform: uppercase;
`

export const styles = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  'subtitle-1': subtitle1,
  'subtitle-2': subtitle2,
  'body-1': body1,
  'body-2': body2,
  'body-3': body3,
  label: label,
}

export type Variant = keyof typeof styles
export const variants = Object.keys(styles) as Variant[]
