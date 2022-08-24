import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings={'¡ Bienvenido !'} />
    </div>
  );
}

export default App;
