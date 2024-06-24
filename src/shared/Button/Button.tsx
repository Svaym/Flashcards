import React, { FC } from 'react'

interface ButtonProps extends React.ComponentProps <'button'> {}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button {...props}></button>
  )
}

export default Button
