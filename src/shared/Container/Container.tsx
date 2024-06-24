import React, { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-7xl px-5 mx-auto w-full'>{ children }</div>
  )
}

export default Container
