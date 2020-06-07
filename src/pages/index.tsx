import React from "react"
import { graphql, PageProps } from "gatsby"
import { IndexQuery } from "../../graphql-types"
import Imgix from "react-imgix"
import styled, { createGlobalStyle } from "styled-components"

import { TopBar } from "../components/TopBar"

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16pt;
    background-color: #EEEEEE;
    margin: 0;
  }
`
const Middle = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}`

const Photos = styled.div`
  margin-top: 120px;
`
const PhotoOuter = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Home: React.FC<PageProps & { data: IndexQuery }> = ({ data }) => {
  const photos = data.allPhoto.edges
  return (
    <React.Fragment>
      <GlobalStyle />
      <Middle>
        <TopBar />
        <Photos>
          {photos.map(photo => {
            const height = `calc(100vh - 120px)`
            const width = `min(min(100vw, 800px), ${height})`
            return (
              <PhotoOuter key={photo.node.hash as string} style={{ width, height }}>
                <Imgix
                  key={photo.node.hash as string}
                  src={`https://suzannachallen.imgix.net/${photo.node.hashedPhotoPath}`}
                  sizes={width}
                />
              </PhotoOuter>
            )
          })}
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
          aspectRatio
          hash
          hashedPhotoPath
        }
      }
    }
  }
`
