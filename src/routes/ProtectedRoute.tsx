import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { ProtectedPage } from '../components/pages/ProtectedPage'

type Props = {
    children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
const logged = false
  return logged ? <ProtectedPage/> : <Navigate to={'/error'}/>

}




