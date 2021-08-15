export type Delta = [number, number][]
export type IncomingMessage = {
  event?: string
  feed: string
  product_ids: string[]
  asks?: Delta
  bids?: Delta
}

export type Book = {
  asks: Delta
  bids: Delta
}

export type Page = {
  [x: number]: number
}

export type NBook = {
  asks: Page
  bids: Page
}

export type Side = 'bids' | 'asks'
