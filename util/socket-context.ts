import { createContext, useContext } from 'react'
import { WebSocketSubject } from 'rxjs/webSocket'

import { IncomingMessage } from 'types/general'

const socketContext = createContext<{
  subject: WebSocketSubject<IncomingMessage> | null
}>({
  subject: null,
})

export const Provider = socketContext.Provider

export const useConnection = (): WebSocketSubject<IncomingMessage> => {
  return useContext(socketContext).subject
}
