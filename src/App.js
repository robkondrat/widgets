import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'Its a favorite'
  },
  {
    title: 'Use?',
    content: 'You use it.'
  }
]

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

