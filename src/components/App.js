import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState } from 'react';
import { plantList } from '../datas/plantList.js';

function App() {
  const storage = localStorage;
  const newCart = plantList.map((plant) => JSON.parse(storage.getItem(plant.name)))
  const [cart, updateCart] = useState(newCart.filter(Boolean));
  const categories = plantList.reduce(
    (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )
  const [catSelect, changeCat] = useState(categories);
  return (<div>
    <Banner />
    <div className="lmj-layout-inner">
      <Cart cart={cart} updateCart={updateCart} catSelect={catSelect} changeCat={changeCat} categories={categories} storage={storage} plantList={plantList}/>
      <ShoppingList cart={cart} updateCart={updateCart} catSelect={catSelect} changeCat={changeCat} categories={categories} storage={storage} plantList={plantList}/>
    </div>
    <QuestionForm />
    <Footer />
  </div>)
}

export default App
