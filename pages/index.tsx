import type { NextPage } from 'next'
import Head from 'next/head'

import OrderBook from 'components/order-book/order-book'

import styles from '/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orderbook</title>
        <meta name="description" content="Orderbook app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <OrderBook />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
