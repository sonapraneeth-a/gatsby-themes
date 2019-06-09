module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-simple-bio",
      options: {},
    },
  ],
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
