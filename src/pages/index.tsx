import React from "react"
import { graphql, PageProps } from "gatsby"
import { IndexQuery } from "types/graphql"
import Imgix from "react-imgix"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16pt;
  }
`
const Middle = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}`

const Title = styled.h1`
  font-family: "Lato";
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 0;
`
const SubTitle = styled.p`
  margin-top: 0;
  font-family: "Lato";
  font-size: 1.2rem;
`
const Photos = styled.div``

const Home: React.FC<PageProps & { data: IndexQuery }> = ({ data }) => {
  const photos = data.allPhoto.edges
  return (
    <React.Fragment>
      <GlobalStyle />
      <Middle>
        <Title>Suzanna Challen</Title>
        <SubTitle>Artist, photographer</SubTitle>
        <Photos>
          {photos.map(photo => (
            <Imgix
              key={photo.node.hash as string}
              src={`https://suzannachallen.imgix.net/${photo.node.hashedPhotoPath}`}
              sizes="min(100vw, 800px)"
            />
          ))}
        </Photos>
      </Middle>
    </React.Fragment>
  )
}
export default Home

export const query = graphql`
  query Index {
    allPhoto(sort: { fields: path }) {
      edges {
        node {
          hash
          hashedPhotoPath
        }
      }
    }
  }
`
