import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { HalfBook } from 'components/order-book'
import theme from 'config/theme.config'
import { book } from 'mock/book'
import { transformBook } from 'util/general'

describe('HalfBook', () => {
  it('renders asks correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <HalfBook items={transformBook(book).asks} side="asks" />,
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders bids correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <HalfBook items={transformBook(book).bids} side="bids" />,
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
