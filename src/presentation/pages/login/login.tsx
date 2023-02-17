
import { loginState, Input, SubmitButton, FormStatus } from './components'
import { Validation } from '@/presentation/protocols'
import { Authentication } from '@/domain/usecases'

import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import React, { useEffect } from 'react'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login = () => {

  return (
    <div>

    </div>
  )
}

export default Login
