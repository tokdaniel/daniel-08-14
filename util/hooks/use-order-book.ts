import { useEffect, useRef, useState } from 'react'
import { bufferTime, scan } from 'rxjs'

import { IncomingMessage, NBook } from 'types/general'
import { computeDelta, transformBook } from 'util/general'
import { useConnection } from 'util/socket-context'

const useOrderBook = (group: number): NBook => {
  const subject = useConnection()
  const subscription = useRef(null)
  const prevGroup = useRef(group)
  const [book, updateBook] = useState<NBook>(null)

  useEffect(() => {
    if (subscription.current) {
      subject.next({
        event: 'unsubscribe',
        feed: `book_ui_${prevGroup.current}`,
        product_ids: ['PI_XBTUSD'],
      })
      prevGroup.current = group
      subscription.current.unsubscribe()
    }
  }, [group])

  useEffect(() => {
    if (subject) {
      subject.next({
        event: 'subscribe',
        feed: `book_ui_${group}`,
        product_ids: ['PI_XBTUSD'],
      })

      subscription.current = subject
        .pipe(
          bufferTime(1000),
          scan<IncomingMessage[], NBook | null>((acc, curr) => {
            let book = acc

            if (!book) {
              const result = curr.find(
                (msg) => msg.feed === `book_ui_${group}_snapshot`,
              )

              if (result) {
                book = transformBook({ asks: result.asks, bids: result.bids })
              }
            }

            return curr
              .filter(
                (msg) => msg.feed === `book_ui_${group}` && !('event' in msg),
              )
              .map(({ asks, bids }) => transformBook({ asks, bids }))
              .reduce(
                (acc, curr) => ({
                  asks: computeDelta(acc?.asks ?? {}, curr?.asks ?? {}),
                  bids: computeDelta(acc?.bids ?? {}, curr?.bids ?? {}),
                }),
                book,
              )
          }, null),
        )
        .subscribe(updateBook)
    }
  }, [subject, group])

  return book
}

export default useOrderBook
