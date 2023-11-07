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
        } else if (event.target.value === 'wyobaWR' || event.target.value === 'wyobaNR') {
            setCorA('A=');
        } else {
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
    }

    function wyobaNR() {
        if (n && m) {
            const USG = gcd(factorial(Number(n)), factorial(Number(n) - Number(m)));
            setMricxveli(factorial(Number(n)) / USG);
            setMnishvneli((factorial(Number(n) - Number(m))) / USG);
        }
    }

    function wyobaWR() {
        if (n && m) {
            setMricxveli(Math.pow(Number(n), Number(m)));
            setMnishvneli(1);
        }
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
                            <input type='number' value={m} onChange={handleMChange} id='m' placeholder='m' />
                            <p className='glow'>{CorA ? CorA : "?="}</p>
                            <input type='text' value={n} onChange={handleNChange} id='n' placeholder='n' />
                        </div>
                        {showResult && (m > n ?
                            <div className="mistake">
                                <h3>Uncorrect Values,<br /> <span className="red">n</span> Must Be Greater Than <span className="red">m</span></h3>
                            </div>
                            : (mnishvneli === 1 ? (
                                <div className={"mistake"}><h2 id="mricxveli">{mricxveli}</h2></div>
                            ) : (
                                <div className="mistake">
                                    <div className="wiladi">
                                        <h2 id="mricxveli">{mricxveli}</h2>
                                        <hr />
                                        <h2 id="mnishvneli">{mnishvneli}</h2>
                                    </div>
                                </div>
                            )
                            )
                        )
                        }
                    </div>
                    <button type="submit" onClick={handleShowResult} >Calculate</button>

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
