import Home from './pages/home/Home';
import { Container } from '@mui/system';
import './app.scss';
import TopBar from './components/topbar/TopBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <TopBar />
        <Container maxWidth='xl'>
          <Routes path='/'>
            <Route index element={<Home />} />
            <Route path='/products/:productId' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App