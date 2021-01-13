/**
 * Simple general slide page include title, description, list, background image, icon
 * based on https://github.com/erichbehrens/react-animated-slider
 * 
 * @2021/01/03 - first version
 * 
 * sample item structure: 
 * {title:'', banner:'', description:'', list:[], icon:''}
 * 
 * @2020/01/12 
 * - add link to list, li format: Website|https://arcade.academy/
 * - add top left icon
 * 
 */
import React from 'react'
import Slider from 'react-animated-slider';
import { A, Div, H3, Ul, Li, P } from '@reflexjs/components';
import { Image } from '@reflexjs/gatsby-plugin-image';


export const SliderMDX = ({items}) => (
  <Slider >
    {items.map((s, i) => (
      <Div key={i} >
        {s.title &&
          <H3 textAlign="center" >{s.title}</H3>
        }
        {s.banner &&
          <Image src={s.banner} colStart="null|2" w="full" overflow="hidden" />
        }
        {s.icon &&
          <Div position="absolute" top="6" left="16"  >
            <Image src={s.icon} width="64px" height="64px" />
          </Div>
        }
        <Div px="16" position="absolute" top={s.title?20:8} left="0" >
          <P fontSize="1.2rem" >{s.description && s.description}</P>
          {s.list &&
            <Ul ml="10" >
              {
                s.list.map((o, i) => {
                  let seperator = o.indexOf('|')
                  let isLink = seperator > -1
                  let linkName = o.substr(0, seperator)
                  let url = o.substr(seperator+1)
                  let style = {
                    p : "0.5",
                    fontSize : "1.3rem",
                    color : "#003a6c"
                  }
                  let link = {
                    target : "_blank",
                    textDecoration : "underline"
                  }
                  return isLink? 
                  (<Li key={i} {...style} >
                    <A href={url} {...link} >{linkName}</A>
                  </Li>) : 
                  (<Li key={i} {...style} >{o}</Li>)
                })
              }
            </Ul>
          }
        </Div>
      </Div>
    ))}
  </Slider>
)