import { useEffect, useState } from 'react'

import { NBook } from 'types/general'
import { calculateSpread, getMaxBid, getMinAsk } from 'util/general'

type Spread = {
  value: number
  percentage: string
  minAsk: number
  maxBid: number
}

const initialState: Spread = {
  value: 0,
  percentage: '0',
  minAsk: 0,
  maxBid: 0,
}

const useSpread = (book: NBook): Spread => {
  const [spread, setSpread] = useState(initialState)

  useEffect(() => {
    if (book) {
      const { asks, bids } = book
      const minAsk = getMinAsk(asks)
      const maxBid = getMaxBid(bids)

      const { value, percentage } = calculateSpread(minAsk, maxBid)

      setSpread({ value: value, percentage, minAsk, maxBid })
    }
  }, [book])

  return spread
}

export default useSpread
