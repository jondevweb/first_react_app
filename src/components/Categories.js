import "../styles/Categories.css";
import { useState, useEffect, useRef } from 'react'

function Categories({catSelect, changeCat, categories}) {
    const formRef = useRef({});
    const [check, changeCheck] = useState(true);
    const inputArray = formRef.current.children
    function checked(cat){  
        const findCat = catSelect.find((category) => category === cat);
        if(findCat){
            const removeCat = catSelect.filter((category) => category !== cat)
            changeCat([...removeCat])
        } else { 
            changeCat([...catSelect, cat])}
    }    
    function checkValue(value){
        changeCat(value);}    
    useEffect(() => {
        if(catSelect.length === categories.length){
            if(inputArray){
                for( let i=0;i<categories.length;i++){
                    if(inputArray[i].children[categories[i]]){
                        inputArray[i].children[categories[i]].checked = true}
                    
                }

            }
        }
    }, [catSelect])
    return(
        <div ref={formRef} className="lmj-categories">
            {categories.map((cat) => (
                <label className="lmj-categories-label" key={cat} htmlFor={cat}>{cat}
                    <input key={cat} id={cat} defaultChecked={check} type='checkbox' name={cat} onChange={(e) => {changeCheck(e.target.checked); checked(e.target.name)} } />
                </label>
            ))}
            <button onClick={(e) => checkValue(categories)}>Réinitialiser</button>
        </div>

        /*<div className="lmj-categories"> 
            <select onChange={(e) => checkValue(e.target.value)} className="lmj-categories-select">
                {categories.map((cat) => (
                    <option key={cat} value={cat} onChange={(e) => checkValue(e.target.value)}>{cat}
                    </option>
                ))}
            </select>
            <button onClick={(e) => checkValue(categories)}>Réinitialiser</button>
        </div>*/
    )
} 

/*function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='lmj-categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}*/

export default Categories