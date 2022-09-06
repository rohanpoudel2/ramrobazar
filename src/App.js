import Home from './pages/home/Home';
import { Container } from '@mui/system';
import './app.scss';
import TopBar from './components/topbar/TopBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/UserSlice';
import { useEffect, useState } from 'react';
import Loading from './pages/loading/Loading';

const App = () => {

  const auth = getAuth();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const User = useSelector((state) => state.User.value.user)

  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user))
        setLoading(false)
      } else {
        dispatch(logout())
        setLoading(false)
      }
    });
  }, [])


  return (
    <BrowserRouter>
      <div className='app'>
        {!loading &&
          <TopBar />
        }
        <Container maxWidth='xl'>
          {loading ?
            <Routes path='/'>
              <Route path='*' element={<Loading />} />
            </Routes>
            :
            <Routes path='/'>
              <Route index element={<Home />} />
              <Route path='/products/:productId' element={<Product />} />
              <Route path='/login' element={User ? <Home /> : <Login />} />
              <Route path='/profile' element={User ? <Profile /> : <Home />} />
              <Route path='*' element={<Home />} />
            </Routes>
          }
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App