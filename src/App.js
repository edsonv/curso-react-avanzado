import React from 'react'
// import { CategoListry } from './components/Category'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCardsContainer } from './container/ListOfPhotoCardsContainer'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      {/* <Category /> */}
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={2} />
    </>
  )
}
