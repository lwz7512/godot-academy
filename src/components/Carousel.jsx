// https://github.com/erichbehrens/react-animated-slider
import React from 'react'
import Slider from 'react-animated-slider';
import { Div, H3, Ul, Li, P } from '@reflexjs/components';
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
        <Div px="14" position="absolute" top={s.title?24:8} left="0" >
          <P fontSize="1.25rem" >{s.description && s.description}</P>
          {s.list &&
            <Ul ml="10" >
              {
                s.list.map((o, i) => (
                  <Li key={i} p="1" fontSize="1.4rem" >{o}</Li>
                ))
              }
            </Ul>
          }
        </Div>
      </Div>
    ))}
  </Slider>
)