module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-simple-bio",
      options: {},
    },
  ],
  siteMetadata: {
    title: "Demo of gatsby-theme-simple-bio",
    author: "Sona Praneeth Akula",
    // TODO: Need to change this URL
    siteUrl: "https://www.gatsbyjs.org",
    description: "This site is a demonstration for using theme " +
                 "gatsby-theme-simple-bio",
    social: {
      facebook: "",
      twitter: "",
      email: "",
      linkedin: "",
      github: "",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
