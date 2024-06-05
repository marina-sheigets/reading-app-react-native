import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Button/Button";
import styled from "styled-components/native";
import Title from "@/components/atoms/Title/Title";

interface BaseProps {
  title: string;
  subtitle?: string;
}

interface ButtonProps extends BaseProps {
  button: string;
  onClick: () => void;
}

interface NoButtonProps extends BaseProps {
  button?: undefined;
  onClick?: undefined;
}

type CentralTextBlockProps = NoButtonProps | ButtonProps;

function CentralTextBlock({
  title,
  subtitle,
  button,
  onClick,
}: CentralTextBlockProps) {

  return (
    <Container>
      <Title>{title}</Title>
      {!!subtitle && <Text>{subtitle}</Text>}
      {!!button && <Button label={button} onClick={onClick} />}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;



export default CentralTextBlock;
