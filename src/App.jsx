import './App.css';
import Line from './components/line';
import Header from './components/Header';
import ResultChanger from './components/ResultChanger';

function App() {
  
  return (
    <div className='app'>
      <Line/>
      <div className='div'>
        <Header/>
        <ResultChanger/>
      </div>
      <Line/>
    </div>

  )
}

export default App
