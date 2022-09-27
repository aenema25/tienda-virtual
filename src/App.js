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
import { CartContextProvider } from './components/context/CartContext';
import Cart from './pages/Cart';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: 1500,
          },
        },
      },
    },
  },
});

const App = () => (
  <CartContextProvider>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item/:id' element={<Product />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </ThemeProvider>
  </CartContextProvider>
)

export default App;