import Loader from '@/components/atoms/Loader/Loader';
import { Book } from '@/types'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import BookCard from '../BookCard/BookCard';

interface BooksListProps {
    books:Book[],
    isLoading:boolean
}
function BooksList({books, isLoading}:BooksListProps) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        books.map((book)=>(
          <BookCard key={book.id} book={book}/>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap:10
  }
})

export default BooksList