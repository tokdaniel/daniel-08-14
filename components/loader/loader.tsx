import Image from 'next/image'
import React from 'react'

type Props = {
  alt: string
  width: number
  height: number
  className?: string
}

const Loader: React.FC<Props> = (props) => (
  <Image src="/loader.svg" {...props} />
)

export default Loader
