import CentralTextBlock from "@/components/molecules/CentralTextBlock/CentralTextBlock";
import BooksList from "@/components/organisms/BooksList/BooksList";
import ToolBar from "@/components/organisms/ToolBar/ToolBar";
import { Book } from "@/types"
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useQuery } from "react-query";
import {BOOKS_API_KEY} from "@env";


function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const { data, error, isLoading } = useQuery("booksData", () =>
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=javascript&key=${BOOKS_API_KEY}`
    ).then((res) => res.json())
  );

  useEffect(() => {
    if (data && data.items) {
      const filteredData = data.items.map((book:any) => ({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description,
        pageCount: book.volumeInfo.pageCount,
        categories: book.volumeInfo.categories,
        imageLinks:book.volumeInfo.imageLinks,
        language: book.volumeInfo.language,
      }));

      setBooks(filteredData);
    }
  }, [data]);

  if (error) {
    return <CentralTextBlock title="Oops... something went wrong(" />;
  }

  return (
    <View>
        <ToolBar/>
        <BooksList books={books} isLoading={isLoading}/>
    </View>
  )
}

export default BooksPage;
