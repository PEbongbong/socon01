import React from 'react';

function Food({name, picture}) {
  return(
    <div>
      <h1> I like {name}</h1>
      <img src = {picture} />
    </div>
  ) ;
  
}

const foodILike = [

  {
    name: 'Kimchi',
    image: 'https://img.choroc.com/newshop/goods/024444/024444_1.jpg',
  },
  {
    name: 'Samyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202105/71358_8221_3033.jpg',
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>))}
      
    </div>
  );
}

export default App;
