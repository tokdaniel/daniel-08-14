import React from 'react'
import styled from 'styled-components'

import { GroupingButtons } from 'components/grouping-buttons'
import { Text } from 'components/typography'
import { NBook } from 'types/general'
import useSpread from 'util/hooks/use-spread'

const Container = styled.div`
  padding: 16px 8px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  margin-bottom: 12px;
`

const SpreadRow = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`
type Props = {
  book: NBook
  grouping: number
  incrementGrouping: () => void
  decrementGrouping: () => void
}

const Spread: React.FC<Props> = ({
  book,
  grouping,
  incrementGrouping,
  decrementGrouping,
}) => {
  const { percentage, value, maxBid, minAsk } = useSpread(book)

  return (
    <Container>
      <Header>
        <Text variant="h5">SPREAD</Text>
        <GroupingButtons
          selected={grouping}
          increment={incrementGrouping}
          decrement={decrementGrouping}
        />
      </Header>
      <SpreadRow>
        <Text variant="body-2">percentage: </Text>
        <Text variant="body-1">{percentage}%</Text>
      </SpreadRow>
      <SpreadRow>
        <Text variant="body-2">value: </Text>
        <Text variant="body-1">{value} USD</Text>
      </SpreadRow>
      <SpreadRow>
        <Text variant="body-2">Highest Bid: </Text>
        <Text variant="body-1" textColor={['green', '500']}>
          {maxBid} USD
        </Text>
      </SpreadRow>
      <SpreadRow>
        <Text variant="body-2">Lowest Offer: </Text>
        <Text variant="body-1" textColor={['red', '500']}>
          {minAsk} USD
        </Text>
      </SpreadRow>
    </Container>
  )
}

export default Spread
