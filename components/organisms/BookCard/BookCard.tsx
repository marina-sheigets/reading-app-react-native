import Title from "@/components/atoms/Title/Title";
import { Book } from "@/types";
import { cutText, getInitials } from "@/utils/text-tools";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {  StyleSheet } from "react-native";
import styled from "styled-components/native";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const title = cutText(book.title);
  const authorName = getInitials(book.authors[0] || "");

  const imageSrc = book.imageLinks.smallThumbnail
    ? { uri: book.imageLinks.smallThumbnail }
    : require("../../../assets/images/not-found.png");

  return (
    <BookContainer>
      <Cover source={imageSrc} style={styles.cover} />
      <BookDetails>
        <Author>{authorName}</Author>
        <PagesAmount>
          <Count>{book.pageCount}</Count>
          <Feather size={15} name="book-open" color={"grey"} />
        </PagesAmount>
      </BookDetails>
      <Title style={styles.title}>{title}</Title>
    </BookContainer>
  );
}

const styles = StyleSheet.create({
  cover: {
    resizeMode: "contain",
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
});

const BookContainer = styled.View`
  width: 46%;
  background-color: blue;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  gap: 5px;
`;

const BookDetails = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  gap: 10px;
`;

const Count = styled.Text`
  color: grey;
`;
const PagesAmount = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Author = styled.Text`
  font-size: 14;
`;

const Cover = styled.Image`
  width: 100%;
`;
export default BookCard;
