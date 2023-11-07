import './App.css';
import Line from './components/Line';
import Header from './components/Header';
import ResultChanger from './components/ResultChanger';
import Version from './components/Version';

function App() {
  
  return (
    <div className='app'>
      <Line/>
      <div className='div'>
        <Header/>
        <ResultChanger/>
        <Version/>
      </div>
      <Line/>
    </div>

  )
}

export default App
