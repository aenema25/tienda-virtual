import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@mui/material/styles';
import Product from './pages/Product';
import Category from './pages/Category';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  }
});

const App = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<Product />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='/cart' element={<div>En construccion</div>} />
      </Routes>
    </div>
  </ThemeProvider>
)

export default App;