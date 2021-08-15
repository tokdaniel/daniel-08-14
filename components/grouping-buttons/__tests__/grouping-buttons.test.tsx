import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { GroupingButtons } from 'components/grouping-buttons'
import theme from 'config/theme.config'

describe('GroupingButtons', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <GroupingButtons
            increment={() => null}
            decrement={() => null}
            selected={25}
          />
          ,
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
