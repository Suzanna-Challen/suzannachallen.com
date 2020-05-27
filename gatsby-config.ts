export const siteMetadata = {
  title: "Suzanna Challen",
  description: "Suzanna Challen's art and photography.",
}
export const plugins = [
  "gatsby-plugin-typescript",
  {
    resolve: "gatsby-plugin-graphql-codegen",
    options: {
      documentPaths: ["./src/**/*.{ts,tsx}"],
    },
  },
  "gatsby-plugin-styled-components",
  {
    resolve: "gatsby-plugin-google-fonts",
    options: {
      fonts: ["lato:400,700"],
      display: "swap",
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Suzanna Challen: Artist, Photographer",
      short_name: "Suzanna Challen",
      start_url: "/",
      icon: "src/images/icon.png",
    },
  },
]
