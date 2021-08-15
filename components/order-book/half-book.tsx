import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'

import { Text } from 'components/typography'
import { NBook } from 'types/general'
import { sortBySide } from 'util/general'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 8px;
`

const OrderBookRow = styled.div<{ header: boolean }>`
  display: flex;
  flex-direction: row;
  height: 20;
  justify-content: space-around;
  align-items: center;
  padding: 2px 0;
  margin-bottom: ${({ header }) => (header ? '8px' : 'initial')};

  ${Text} {
    text-align: right;
  }
`

const Price = styled.div<{ side?: 'asks' | 'bids' }>`
  text-transform: uppercase;
  flex: 1;
  color: ${({ side, theme }) => {
    if (!side) {
      return theme.palette.grey[900]
    }

    return side === 'asks' ? theme.palette.red[500] : theme.palette.green[500]
  }};
`

const Size = styled.div`
  text-transform: uppercase;
  flex: 1;
`

const Total = styled.div`
  text-transform: uppercase;
  flex: 1;
`

type Props = {
  items: NBook['bids']
  side: 'bids' | 'asks'
}

const HalfBook: React.FC<Props> = ({ items, side }) => {
  const total = useRef(0)
  const content = useMemo(
    () =>
      Object.entries(items)
        .sort(sortBySide(side))
        .slice(0, 8)
        .map(([price, size], i) => {
          total.current = i === 0 ? size : total.current + size
          return (
            <OrderBookRow header={false} key={price}>
              <Price side={side}>
                <Text
                  variant="body-1"
                  textColor={
                    side === 'asks' ? ['red', '500'] : ['green', '500']
                  }
                >
                  {price}
                </Text>
              </Price>
              <Size>
                <Text variant="body-1">{size}</Text>
              </Size>
              <Total>
                <Text variant="body-1">{total.current}</Text>
              </Total>
            </OrderBookRow>
          )
        }),
    [items],
  )

  return (
    <Container>
      <OrderBookRow header>
        <Price>
          <Text variant="subtitle-1">price</Text>
        </Price>
        <Size>
          <Text variant="subtitle-1">size</Text>
        </Size>
        <Total>
          <Text variant="subtitle-1">total</Text>
        </Total>
      </OrderBookRow>
      {content}
    </Container>
  )
}

export default HalfBook
