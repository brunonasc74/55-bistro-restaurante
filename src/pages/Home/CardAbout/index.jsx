import React from 'react'
import { Card } from './style';

const CardAbout = ({number, title, desc}) => {
  return (
    <Card>
      <span>{number}</span>
      <h4>{title}</h4>
      <p className='p-cardabout'>{desc}</p>
    </Card>
  )
}

export default CardAbout;