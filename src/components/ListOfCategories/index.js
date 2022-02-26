import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://petgram-server-gtrnb8zqu-edsonv.vercel.app/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
          categories.map(category => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))
        }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
