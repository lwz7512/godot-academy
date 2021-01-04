// https://github.com/erichbehrens/react-animated-slider
import React from 'react'
import Slider from 'react-animated-slider';
import { Div, H3, Ul, Li, Container } from '@reflexjs/components';


export const SliderMDX = ({items}) => (
  <Slider >
    {items.map((s, i) => (
      <Container key={i}>
        <H3 textAlign="center" >{s.title}</H3>
        <Div px="12" >{s.description}</Div>
      </Container>
    ))}
  </Slider>
)