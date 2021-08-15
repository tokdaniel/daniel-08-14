import 'styles/globals.css'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'
import { ThemeProvider } from 'styled-components'

import defaultTheme from 'config/theme.config'
import { IncomingMessage } from 'types/general'
import { Provider } from 'util/socket-context'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [subject, setSubject] =
    useState<WebSocketSubject<IncomingMessage> | null>(null)

  useEffect(() => {
    const conn = webSocket<IncomingMessage>(process.env.WSS_HOST)

    conn.subscribe(null, () => {
      setTimeout(() => {
        Router.push('/error')
      }, 3000)
    })

    setSubject(conn)
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider value={{ subject }}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
