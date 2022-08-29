import Home from './pages/home/Home';
import { Container } from '@mui/system';
import './app.scss';
import TopBar from './components/topbar/TopBar'

const App = () => {
  return (
    <div className='app'>
      <TopBar />
      <Container maxWidth='xl'>
        <Home />
      </Container>
    </div>
  )
}

export default App