import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { Spread } from 'components/spread'
import theme from 'config/theme.config'
import { book } from 'mock/book'
import { transformBook } from 'util/general'

describe('Spread', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Spread
            book={transformBook(book)}
            grouping={25}
            incrementGrouping={() => null}
            decrementGrouping={() => null}
          />
          ,
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
