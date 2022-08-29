import Home from './pages/home/Home';
import { Container } from '@mui/system';
import './app.scss';
import TopBar from './components/topbar/TopBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product/Product';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <TopBar />
        <Container maxWidth='xl'>
          <Routes path='/'>
            <Route index element={<Home />} />
            <Route path='/products/:productId' element={<Product />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App