require(`dotenv`).config()

module.exports = {
  pathPrefix: `/godot-academy`,
  siteMetadata: {
    title: "Godot Acadamy",
    slogan: "Learning coding by games!",
    description: "The unique and easy way to learn programming and game development.",
    siteUrl: process.env.SITE_URL || "http://godot.academy/",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    `@reflexjs/gatsby-theme-doc`,
    "@reflexjs/gatsby-theme-post",
    "@reflexjs/gatsby-theme-video",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Godot Acadamy - your starting point for game development.`,
        short_name: `Godot Academy`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
  ],
}
