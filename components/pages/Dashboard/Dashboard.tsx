import CentralTextBlock from "@/components/molecules/CentralTextBlock/CentralTextBlock";
import BooksList from "@/components/organisms/BooksList/BooksList";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function Dashboard() {
  const startedBooks: any = [];

  const onClick = () => {
    router.replace('/books')
  };

  if (startedBooks.length) {
    return (
      <View>
        <BooksList books={startedBooks} />
      </View>
    );
  }

  return (
    <CentralTextBlock
      title="There are no started books"
      subtitle="To start reading, you need to add book"
      button="Find book"
      onClick={onClick}
    />
  );
}

export default Dashboard;
