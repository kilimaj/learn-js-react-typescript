import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcom';

function App() {
  return (
    <div className="App">
      <Welcome name="Kilima"/>
      <Welcome name="John" />
    </div>
  );
}

export default App;
