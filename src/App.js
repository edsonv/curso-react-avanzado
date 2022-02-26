import React from 'react'
// import { CategoListry } from './components/Category'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      {/* <Category /> */}
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
