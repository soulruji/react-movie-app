import React from 'react';
import PropTypes from 'prop-types';

const foodLike = [
  {
    id: 1,
    name: "kimchi",
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "밀페유",
    image: "http://t1.daumcdn.net/liveboard/dailylife/6b76af6db2de49b3a7fd98db2f3e25e4.JPG",
    rating: 4.5
  },
  {
    id: 3,
    name: "김밥",
    image: "http://t1.daumcdn.net/liveboard/dailylife/75fa2dd2ea934d009052fb8867b6bb8c.jpg",
    rating: 3
  },
  {
    id: 4,
    name: "샐러드",
    image: "https://www.amwayon.co.kr/wp-content/uploads/2016/12/703.jpg",
    rating: 3.2
  },
  {
    id: 5,
    name: "떡볶이",
    image: "http://img.allurekorea.com/allure/2018/05/style_5b0e356574c4d.jpg",
    rating: 2.5
  },
];



function Food({name, picture, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <span>{rating} / 5.0</span>
      <img src={picture} alt={name}/>
    </div>
  );
}

function renderFood(dish){
  console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div className="App">
      {foodLike.map(renderFood)}
    </div>
  );
}

export default App;
