require(`dotenv`).config()

module.exports = {
  pathPrefix: "/reflex-ga-site",
  siteMetadata: {
    title: "Godot Acadamy",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
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
        icon: `content/images/ga_logo.png`,
      },
    },
  ],
}
