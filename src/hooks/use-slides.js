/**
 * yaml loader by title?
 * @2021/03/14
 */

import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useSlides = (title) => {

  let data = useStaticQuery(graphql`
    {
      slides: allDataYaml {
        nodes {
          title
          slides {
            banner
            description
            footer
            icon
            list
            title
          }
        }
      }
    }
  `)

  return filterNodes(
    {
      allYAMLs: {
        nodes: [...data.slides?.nodes],
      },
    },
    title
  )
  
}