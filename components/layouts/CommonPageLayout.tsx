import React from 'react';
import styled from 'styled-components/native';

interface CommonLayoutProps {
    children:React.ReactElement
}
export default function CommonPageLayout({ children}: CommonLayoutProps) {
  return (
          <PageContainer>
            {children}
          </PageContainer>      
  );
}

const PageContainer = styled.View`
  width:100%;
  height:100%;
`

