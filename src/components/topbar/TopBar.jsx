import './topbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from '@mui/system';


const TopBar = () => {
  return (
    <div className="topbar">
      <Container maxWidth='xl'>
        <div className="wrapper">
          <div className="left">
            <div className="logo">
              RamroBazar
            </div>
          </div>
          <div className="middle">
            <div className="searchbar">
              <SearchIcon className='icon' />
              <input type="text" placeholder='Search For Anything' />
            </div>
          </div>
          <div className="right">
            <div className="buttons">
              <div className="button active">
                <HomeIcon className='icon' />
                <div className="indicator">

                </div>
              </div>
              <div className="button ">
                <ChatBubbleOutlineIcon className='icon' />
                <div className="indicator">

                </div>
              </div>
              <div className="button">
                <AddIcon className='icon' />
                <div className="indicator">

                </div>
              </div>
              <div className="button">
                <div className="top">
                  <AccountCircleIcon className='icon' />
                  <span>Login</span>
                </div>
                <div className="indicator">

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar