import { useState } from 'react';
import './ResultChanger.css'

function ResultChanger() {
    const [selectedValue, setSelectedValue] = useState('');
    const [n, setN] = useState('');
    const [m, setM] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [mricxveli, setMricxveli] = useState('');
    const [mnishvneli, setMnishvneli] = useState('');
    const [CorA, setCorA] = useState('')
    const [showInput, setShowInput] = useState(false);

    const handleSelectedValue = (event) => {
        if (event.target.value === 'jufdebaWR' || event.target.value === 'jufdebaNR') {
            setCorA('C=');
        } else if(event.target.value === 'wyobaWR' || event.target.value === 'wyobaNR'){
            setCorA('A=');
        }   else{
            setCorA('?=');
        }
        setSelectedValue(event.target.value);
        setShowInput(true);
        setShowResult(false);
    }

    const handleMChange = (e) => {
        setM(e.target.value);
        // Reset showResult when the input value changes
        setShowResult(false);
    }

    const handleNChange = (e) => {
        setN(e.target.value);
        // Reset showResult when the input value changes
        setShowResult(false);
    }

    const handleShowResult = () => {
        if (selectedValue === 'jufdebaWR') {
            jufdebaWR();
        } else if (selectedValue === 'jufdebaNR') {
            jufdebaNR();
        } else if (selectedValue === 'wyobaWR') {
            wyobaWR();
        } else if (selectedValue === 'wyobaNR') {
            wyobaNR();
        }
        setShowResult(true);
    }

    function jufdebaWR() {
        
        if (n && m) {
            const USG = gcd(factorial(Number(n) + Number(m) - 1), factorial(Number(m) - 1) * factorial((Number(n) + Number(m) - 1) - (Number(m) - 1)));
            setMricxveli(factorial(Number(n) + Number(m) - 1) / USG);
            setMnishvneli(factorial(Number(m) - 1) * factorial((Number(n) + Number(m) - 1) - (Number(m) - 1)) / USG);
        }

    }

    function jufdebaNR() {
        if (n && m) {
            const USG = gcd(factorial(Number(n)), factorial(m) * factorial(Number(n) - Number(m)));
            setMricxveli(factorial(Number(n)) / USG);
            setMnishvneli((factorial(m) * factorial(Number(n) - Number(m))) / USG);
        }
        setCorA("C=");
    }

    function wyobaNR() {
        if (n && m) {
            const USG = gcd(factorial(Number(n)), factorial(Number(n) - Number(m)));
            setMricxveli(factorial(Number(n)) / USG);
            setMnishvneli((factorial(Number(n) - Number(m))) / USG);
        }
        setCorA("A=");
    }

    function wyobaWR() {
        if (n && m) {
            setMricxveli(Math.pow(Number(n), Number(m)));
            setMnishvneli(1);
        }
        setCorA("A=");
    }

    return (
        <div className='main'>
            <label>Choose According To Your Assingment</label>
            <br />
            <select onChange={handleSelectedValue}>
                <option>Choose</option>
                <option value="jufdebaWR" >Order Is Not Important, Repitation Is  Allowed</option>
                <option value="jufdebaNR" >Order Is Not Important, Repitation Is Not Allowed</option>
                <option value="wyobaWR" >Order Is Important, Repitation Is Allowed</option>
                <option value="wyobaNR" >Order Is Important, Repitation Is Not Allowed</option>
            </select>
            {showInput &&
                <div className="wrapper">
                    <div>
                        <div className="inputs">
                        <input type='number' value={m} onChange={handleMChange} id='m' placeholder='m'/>
                        <p>{CorA ? CorA : "?="}</p>
                        <input type='number' value={n} onChange={handleNChange} id='n' placeholder='n' />
                    </div>
                    {showResult && (
                        mnishvneli === 1 ? (
                            <p id="mricxveli">{mricxveli}</p>
                        ) : (
                            <div className="wiladi">
                                <p id="mricxveli">{mricxveli}</p>
                                <hr />
                                <p id="mnishvneli">{mnishvneli}</p>
                            </div>
                        )
                    )}
                    </div>
                    <button type="submit" onClick={handleShowResult}>Calculate</button>
                    
                </div>}

        </div>
    )
}

export default ResultChanger;

function factorial(A) {
    let tmp = 1;

    for (let i = 0; i < A; i++) {
        tmp *= (i + 1);
    }

    return tmp;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
