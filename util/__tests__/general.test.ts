import { book, simpleBook } from 'mock/book'
import { delta } from 'mock/delta'
import {
  transformBook,
  sortBySide,
  computeDelta,
  calculateSpread,
  getMinAsk,
} from 'util/general'

describe('general utils', () => {
  describe('transformBook', () => {
    const expected = {
      bids: {
        '47599.5': 171,
        '47597': 1070,
        '47592': 4479,
      },
      asks: {
        '47602.5': 2500,
        '47603': 1808,
        '47610': 2500,
      },
    }

    it('should normalize the response book structure', () => {
      expect(transformBook(simpleBook)).toEqual(expected)
    })
  })

  describe('sortBySide', () => {
    it('should short asks in ascending order', () => {
      const data = Object.entries(transformBook(simpleBook).asks)
      const expected = [
        ['47602.5', 2500],
        ['47603', 1808],
        ['47610', 2500],
      ]

      data.sort(sortBySide('asks'))

      expect(data).toEqual(expected)
    })

    it('should short bids in descending order', () => {
      const data = Object.entries(transformBook(simpleBook).bids)
      const expected = [
        ['47599.5', 171],
        ['47597', 1070],
        ['47592', 4479],
      ]

      data.sort(sortBySide('bids'))

      expect(data).toEqual(expected)
    })
  })

  describe('computeDelta', () => {
    it('should be able to compute a new asks set, based on the delta', () => {
      const state = transformBook(simpleBook)
      const update = transformBook(delta)

      const newState = computeDelta(state.asks, update.asks)
      const expected = {
        '47603': 2239,
        '47610': 1925,
      }

      expect(newState).toEqual(expected)
    })

    it('should be able to compute a new bids set, based on the delta', () => {
      const state = transformBook(simpleBook)
      const update = transformBook(delta)

      const newState = computeDelta(state.bids, update.bids)
      const expected = {
        '47597': 1259,
        '47592': 3345,
      }

      expect(newState).toEqual(expected)
    })
  })

  describe('calculateSpread', () => {
    const highestBid = 10000
    const lowestAsk = 10100

    const expected = {
      value: 100,
      percentage: '1.000',
    }

    expect(calculateSpread(lowestAsk, highestBid)).toEqual(expected)
  })

  describe('getMinAsk', () => {
    it('should be able to pick the lowest ask price, form a set of asks', () => {
      const minAsk = getMinAsk(transformBook(book).asks)

      expect(minAsk).toEqual(47602.5)
    })
  })

  describe('getMaxBid', () => {
    it('should be able to pick the highest bid price, form set of bids', () => {
      const maxBid = getMinAsk(transformBook(book).bids)

      expect(maxBid).toEqual(47559)
    })
  })
})
