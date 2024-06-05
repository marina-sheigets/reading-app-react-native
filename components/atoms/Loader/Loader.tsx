import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

type Size = "large" | "small";
interface LoaderProps {
    size?: Size
}

function Loader({size = "large"}:LoaderProps) {
  return (
    <Container><ActivityIndicator size={size} color={"black"}/></Container>
  )
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Loader