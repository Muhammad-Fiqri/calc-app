import './App.scss'
import Opening from './components/opening/Opening.tsx';
import Calculator from './components/main-program/Calculator.tsx';

function App() {
  return (
      <div className="app-wrp">
        <Opening/>
        <Calculator/>
      </div>
  )
}

export default App
