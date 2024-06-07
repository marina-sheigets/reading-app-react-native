import CentralTextBlock from "@/components/molecules/CentralTextBlock/CentralTextBlock";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

function Dashboard() {
  const { t } = useTranslation();
  const startedBooks: any = [];

  const onClick = () => {
    router.replace("/books");
  };

  if (startedBooks.length) {
    return <View>{/* <BooksList books={startedBooks} /> */}</View>;
  }

  return (
    <CentralTextBlock
      title={t("There are no started books")}
      subtitle={t("To start reading, you need to add book")}
      button={t("Find book")}
      onClick={onClick}
    />
  );
}

export default Dashboard;
