import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Appetizers from './components/pages/Appetizers';
import BFYPopularDishes from './components/pages/BFY_Popular_Dishes';
import Biryani from './components/pages/Biryani';
import FriedRice from './components/pages/FriedRice';
import KP from './components/pages/KP';
import Mandi from './components/pages/Mandi';

function App() {
  return (
    <div className='App'>
      <h1>Biryaniify Menu</h1>
      <nav>
        <ul>
          <li>
            <a href='/appetizers'> Appetizers </a>
          </li>
          <li>
            <a href='/biryani'> Biryani </a>
          </li>
          <li>
            <a href='/bfy_specials'> Biryaniify Specials </a>
          </li>
          <li>
            <a href='/mandi'> Mandi </a>
          </li>
          <li>
            <a href='/fried_rice'> Fried Rice </a>
          </li>
          <li>
            <a href='/kothu_paratha'> Kothu Paratha </a>
          </li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/appetizers' element={<Appetizers />} />
          <Route path='/bfy_specials' element={<BFYPopularDishes />} />
          <Route path='/biryani' element={<Biryani />} />
          <Route path='/kothu_paratha' element={<KP />} />
          <Route path='/mandi' element={<Mandi />} />
          <Route path='/fried_rice' element={<FriedRice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
