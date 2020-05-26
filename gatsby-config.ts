export const siteMetadata = {
  title: "Suzanna Challen",
  description: "Suzanna Challen's art and photography.",
}
export const plugins = [
  "gatsby-plugin-typescript",
  {
    resolve: "gatsby-plugin-graphql-codegen",
    options: {
      documentPaths: ["./src/**/*.{ts,tsx}", "./.cache/fragments/*.js"],
    },
  },
]
