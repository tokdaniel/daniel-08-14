import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { Text } from 'components/typography'
import theme from 'config/theme.config'

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Text variant="h1" />
          <Text variant="h2" />
          <Text variant="h3" />
          <Text variant="h4" />
          <Text variant="h5" />
          <Text variant="h6" />
          <Text variant="body-1" />
          <Text variant="body-2" />
          <Text variant="body-3" />
          <Text variant="subtitle-1" />
          <Text variant="subtitle-2" />
          <Text variant="label" />
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
