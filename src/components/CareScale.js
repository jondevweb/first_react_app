import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const scaleType =
        careType === 'light' ? (
            <img src={Sun} alt='sun-icon' />
        ) : (
            <img src={Water} alt='water-icon' />
        )
    function scaleAlert(){
        var LorW = "";
        var quantity = '';
        careType === 'light' ? LorW = 'e lumière' : LorW = "\'arrosage";
        scaleValue === 2 ? quantity = 'modérement': scaleValue < 2 ? quantity = 'peu' : quantity = 'beaucoup';
        alert("Cette plante requiert " + quantity + " d" + LorW +".");}
    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()} onClick={() => scaleAlert()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale