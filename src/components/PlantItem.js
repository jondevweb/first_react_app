import CareScale from './CareScale.js';
import '../styles/PlantItem.css';

function handleClick(plantName) {
    alert('vous voulez acheter 1 ' + plantName + ' ? Très bon choix 🌱✨');
}

function PlantItem({id, cover, name, water, light, price, category, catSelect, cart, updateCart }){
    return (    
        <li key={id} className='lmj-plant-item' onClick={() =>handleClick(name)}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={cover} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem