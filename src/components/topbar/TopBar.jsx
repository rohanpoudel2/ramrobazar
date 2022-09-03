import './topbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import UploadAds from '../uploadads/UploadAds';

import { useSelector, useDispatch } from 'react-redux'
import { open } from '../../redux/AddPostSlice'


const TopBar = () => {
  const [ToggleMenu, setToggleMenu] = React.useState(false);
  const [TogglePost, setTogglePost] = React.useState('');

  const state = useSelector((state) => state.AddPost.value)
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTogglePost(state)
  }, [state])

  const user = false;

  return (
    <>
      <div className="topbar">
        <Container maxWidth='xl'>
          {<UploadAds toggle={TogglePost} />}
          <div className="wrapper">
            <div className="left">
              <div className="logo">
                <Link to='/'>
                  RamroBazar
                </Link>
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
                  <AddIcon className='icon add' onClick={() => dispatch(open())} />
                  <div className="indicator">

                  </div>
                </div>
                <div className="button">
                  <div className="top">
                    {!user ?
                      <>
                        <AccountCircleIcon className='icon' />
                        <Link to='/login'>
                          <span>Login</span>
                        </Link>
                      </> :
                      <>
                        <AccountCircleIcon className='icon' />
                        <span onClick={() => setToggleMenu(!ToggleMenu)}>Rohan</span>
                      </>
                    }
                  </div>
                  <div className="indicator">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="menu">
        {
          ToggleMenu &&

          <Paper sx={{ width: 320, maxWidth: '100%' }} className='paper'>
            <MenuList>
              <MenuItem component={Link} to='/profile' >
                <div className="menuitem first">
                  <span>My Profile</span>
                  <ArrowForwardIcon className='icon' />
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <div className="menuitem">
                  <PhoneInTalkIcon className='icon' />
                  <span>Contact Support</span>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <div className="menuitem">
                  <SettingsIcon className='icon' />
                  <span>Settings</span>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <div className="menuitem">
                  <LogoutIcon className='icon' />
                  <span>Log Out</span>
                </div>
              </MenuItem>
            </MenuList>
          </Paper>
        }
      </div>
    </>
  )
}

export default TopBar