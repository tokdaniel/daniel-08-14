import React from 'react'
import styled from 'styled-components'

import { Text } from 'components/typography'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`

const Button = styled.button`
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.grey[100]};

  :hover {
    background: rgba(33, 33, 33, 0.6);
  }
`

type Props = {
  selected: number
  increment: () => void
  decrement: () => void
  groupings?: number[]
}

const GroupingButtons: React.FC<Props> = ({
  selected,
  increment,
  decrement,
}) => {
  return (
    <Container>
      <Text variant="label">group: {selected}</Text>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>−</Button>
    </Container>
  )
}

export default GroupingButtons
