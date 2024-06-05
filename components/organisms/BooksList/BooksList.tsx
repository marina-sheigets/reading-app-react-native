import React from 'react'
import { Text } from 'react-native'

interface BooksListProps {
    books:any
}
function BooksList({books}:BooksListProps) {

  return (
    <Text>BooksList</Text>
  )
}

export default BooksList