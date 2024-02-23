import PlantItem from './PlantItem.js';
import '../styles/ShoppingList.css';
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({cart, updateCart, catSelect, changeCat, categories, storage, plantList}) {

    function addToCart(name, price){
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if(currentPlantSaved){
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantSaved.amount + 1}]);
            const addStorage = JSON.stringify({name, price, amount:currentPlantSaved.amount + 1});
            storage.setItem(name, addStorage);
        } else {
            updateCart([...cart, {name, price, amount:1}]);
            const addStorage = JSON.stringify({name, price, amount:1});
            storage.setItem(name, addStorage);}
    };
    return (
        <div className='lmj-shopping-list'>
            <Categories categories={categories} catSelect={catSelect} changeCat={changeCat}/> 
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) => ( 
                    <div key={id}>
                        {catSelect.find((choice) => choice === category) &&
                            <div>
                                <PlantItem  
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price}
                                />
                                <button className="lmj-cart-add-button" onClick={() => addToCart(name, price)}>Ajoutez au panier</button>
                            </div>
                        }
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList