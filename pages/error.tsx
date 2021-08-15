import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import { Text } from 'components/typography'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`

const Error: NextPage = () => {
  return (
    <Container>
      <Text variant="h1">ERROR</Text>
      <Text variant="subtitle-1">
        The connection to the websocket url was not successful.
      </Text>
    </Container>
  )
}

export default Error
