import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
/*	const isInputError = inputValue.includes('@')*/
	function checkValue(value){
		if (!value.includes('@')){
			setInputValue(value);
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")}
		
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
				<input className='lmj-footer-elem' type="mail" name="mail" value={inputValue} onBlur= {(e) => checkValue(e.target.value)} onChange={(e) => setInputValue(e.target.value)}/></div>
		</footer>
	)
}

export default Footer