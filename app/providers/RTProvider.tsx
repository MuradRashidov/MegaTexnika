"use client"
import { Provider } from 'react-redux'
import React, { ReactNode } from 'react'
import { store } from '@/redux/store'
interface Props{
    children:ReactNode
}
const RTProvider = (props:Props) => {
  return (
    <Provider store={store}>{props.children}</Provider>
  )
}

export default RTProvider;