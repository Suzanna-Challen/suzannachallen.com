import React from "react"
import { graphql, PageProps } from "gatsby"
import { IndexQuery } from "types/graphql"
import Imgix from "react-imgix"
import styled from "styled-components"

const Middle = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}`

const Home: React.FC<PageProps & { data: IndexQuery }> = ({ data }) => {
  const photos = data.allPhoto.edges
  return (
    <Middle>
      {photos.map(photo => (
        <Imgix
          key={photo.node.hash as string}
          src={`https://suzannachallen.imgix.net/${photo.node.hashedPhotoPath}`}
          sizes="min(100vw, 800px)"
        />
      ))}
    </Middle>
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
