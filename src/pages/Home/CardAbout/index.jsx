import React from 'react'
import { Card } from './style';

const CardAbout = ({number, title, desc}) => {
  return (
    <Card>
      <span>{number}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </Card>
  )
}

export default CardAbout;