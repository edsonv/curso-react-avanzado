import React from 'react'
// import { CategoListry } from './components/Category'
import { GlobalStyle } from './components/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Category /> */}
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
