import { loginState } from './atoms'

import { useRecoilValue } from 'recoil'
import React from 'react'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const state = useRecoilValue(loginState)
  return (
      <>
      
      </>
  )
}

export default SubmitButton
