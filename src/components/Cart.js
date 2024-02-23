import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({cart, updateCart, catSelect, changeCat, storage, plantList}) {
    const [isOpen, setIsOpen] = useState(true);
    const montantTotal = cart.reduce(
        (acc, plant) =>
            acc + plant.price*plant.amount, 0
    );
    useEffect(() => {
        document.title = `LMJ: ${montantTotal}€ d'achats`}, [montantTotal])
    function deleteCart(name) {
        const deletePlantName = cart.find((plant) => plant.name === name);
        storage.removeItem(name);          
        updateCart(cart.filter(plant => plant !== deletePlantName));}
    function emptyCart(){
        storage.clear();
        updateCart([]);} 
    return isOpen ? (
        <div className="lmj-cart">
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2> 
                        <ul> 
                            {cart.map(({name, price, amount}, index) => (
                                <li key={`${name}-${index}`}>{name} {price}€ * {amount}
                                    <button className="lmj-cart-add-button" onClick={() => deleteCart(name)}>Supprimer</button>
                                </li>
                            ))}

                        </ul>
                        <p>Le montant total est de {montantTotal}€</p>
                        <button className="lmj-cart-add-button" onClick={() => emptyCart()}>Videz le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>)}
        </div>
    ) : (
    <div className='lmj-cart-closed'>
        <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    </div>);
};

export default Cart;