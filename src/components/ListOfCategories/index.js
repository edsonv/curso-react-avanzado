import React from 'react'
import db from '../../../api/db.json'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        db.categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      }
    </List>
  )
}
