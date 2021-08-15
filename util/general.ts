import { Book, NBook, Page, Side } from 'types/general'

export const transformSide = (state: Book, side: 'bids' | 'asks'): Page => {
  return Object.values(state[side] ?? {}).reduce((acc, [price, size]) => {
    return {
      ...acc,
      [price]: size,
    }
  }, {})
}

export const transformBook = (book: Book): NBook => {
  const asks = transformSide(book, 'asks')
  const bids = transformSide(book, 'bids')

  return {
    asks,
    bids,
  }
}

export const sortBySide =
  (side: Side) =>
  ([priceA]: [string, number], [priceB]: [string, number]): number => {
    const a = parseFloat(priceA)
    const b = parseFloat(priceB)

    return side === 'asks' ? a - b : b - a
  }

export const computeDelta = (state: Page, delta: Page): Page =>
  Object.entries(Object.assign({}, state, delta))
    .filter(([_, size]) => size !== 0)
    .reduce(
      (acc, [price, size]) => ({
        ...acc,
        [price]: size,
      }),
      {},
    )

type Spread = {
  percentage: string
  value: number
}

export const calculateSpread = (minAsk: number, maxBid: number): Spread => {
  const value = minAsk - maxBid
  const percentage = (1 - minAsk / maxBid) * 100

  return { value, percentage: Math.abs(percentage).toFixed(3) }
}

export const getMinAsk = (asks: Page): number =>
  Math.min(...(Object.keys(asks) as unknown as number[]))

export const getMaxBid = (bids: Page): number =>
  Math.max(...(Object.keys(bids) as unknown as number[]))
