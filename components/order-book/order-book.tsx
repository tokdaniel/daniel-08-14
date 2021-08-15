import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Loader } from 'components/loader'
import { Spread } from 'components/spread'
import { Text } from 'components/typography'
import useOrderBook from 'util/hooks/use-order-book'

import HalfBook from './half-book'

const Container = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.palette.bg[400]};
  padding: 20px;
  border-radius: 12px;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[100]};
`

const groupings = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000]

const OrderBook: React.FC = () => {
  const [grouping, setGrouping] = useState(groupings[6])
  const book = useOrderBook(grouping)

  const incrementGrouping = useCallback(() => {
    const i = groupings.indexOf(grouping)
    if (i === groupings.length - 1) {
      return
    }
    setGrouping(groupings[i + 1])
  }, [grouping])

  const decrementGrouping = useCallback(() => {
    const i = groupings.indexOf(grouping)
    if (i === 0) {
      return
    }
    setGrouping(groupings[i - 1])
  }, [grouping])

  return book ? (
    <Container>
      <Text variant="h2">XBT/USD</Text>
      <Wrapper>
        <HalfBook items={book.bids} side="bids" />
        <HalfBook items={book.asks} side="asks" />
      </Wrapper>
      <Spread
        book={book}
        grouping={grouping}
        incrementGrouping={incrementGrouping}
        decrementGrouping={decrementGrouping}
      />
    </Container>
  ) : (
    <Loader
      alt="Loading..."
      width={150}
      height={150}
      className="loader-image"
    />
  )
}

export default OrderBook
