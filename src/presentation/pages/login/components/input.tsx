import { loginState } from './atoms'

import { useRecoilState } from 'recoil'
import React from 'react'

type Props = {
  type: string
  name: string
  placeholder: string
}

const Input: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  const [state, setState] = useRecoilState(loginState)
  return (

    <>
    </>
  )
}

export default Input
