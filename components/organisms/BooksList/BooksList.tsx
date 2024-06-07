import Loader from "@/components/atoms/Loader/Loader";
import { Book } from "@/types";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import BookCard from "../BookCard/BookCard";

interface BooksListProps {
  books: Book[];
  isLoading: boolean;
}
function BooksList({ books, isLoading }: BooksListProps) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={books}
        renderItem={({ item }: any) => (
          <View style={styles.itemContainer}>
            <BookCard book={item} />
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: '50%',   
  },
});

export default BooksList;
