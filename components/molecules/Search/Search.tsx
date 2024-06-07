import useDebounce from "@/hooks/useDebounce";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import styled from "styled-components/native";

function Search() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');


  const onChangeText = (newQuery:string)=>{
    setSearch(newQuery);
    handleSearch(newQuery);
  }

  const handleSearch = useDebounce((query:string)=>{
    if(query.trim().length){
      
    }
  });


  return (
    <View>
      <SearchContainer>
        <Feather name="search" size={30} color={"black"} />

        <SearchBar
          placeholder={t("Enter the book name")}
          value={search}
          onChangeText={onChangeText}
        />

        <Feather name="filter" size={30} color={"black"} />
      </SearchContainer>
    </View>
  );
}

const SearchContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  gap: 10px;
  align-items: center;
`;

const SearchBar = styled.TextInput`
  border: 1px solid black;
  padding: 5px 12px;
  flex: 1;
  border-radius: 8px;
`;
export default Search;
