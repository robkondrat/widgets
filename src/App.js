import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     title: 'Why use React?',
//     content: 'Its a favorite'
//   },
//   {
//     title: 'Use?',
//     content: 'You use it.'
//   }
// ]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'Shade of Blue',
    value: 'blue'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  
  return (
    <div>
      <Dropdown 
        selected={selected}
        onSelectedChange={setSelected} 
        options={options} 
      />
    </div>
  );
};

