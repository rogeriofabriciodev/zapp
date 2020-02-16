import React from 'react'
import InsetProvider from '../provider/InsertNewProvider'
import ListProvider from '../provider/ListProvider'

const PageProvider = () => {
  return (
    <>
      <InsetProvider />
      <ListProvider />
    </>
  )
}

export default PageProvider