import React from "react"

import styled from "styled-components"

const Top = styled.div`
  position: fixed;
  width: min(100vw, 800px);
  box-sizing: border-box;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  background-color: #eeeeee;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-family: "Lato";
  font-weight: bold;
  font-size: 2.5rem;
  margin: 0;
`
const SubTitle = styled.p`
  margin: 0;
  font-family: "Lato";
  font-size: 1.2rem;
`

export const TopBar: React.FC = () => (
  <Top>
    <Title>Suzanna Challen</Title>
    <SubTitle>Artist, photographer</SubTitle>
  </Top>
)
