import React from 'react'
// import { CategoListry } from './components/Category'
import { GlobalStyle } from './components/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Category /> */}
      <ListOfCategories />
    </>
  )
}
