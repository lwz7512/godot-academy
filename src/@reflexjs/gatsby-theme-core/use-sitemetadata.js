import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          ...SiteMetadataFragment
          slogan
        }
      }
    }
  `)

  return data.site.siteMetadata
}
