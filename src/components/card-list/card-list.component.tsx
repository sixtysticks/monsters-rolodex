import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

interface Props {
  monsters: Monster[];
}

export const CardList = (props: Props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster: Monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
