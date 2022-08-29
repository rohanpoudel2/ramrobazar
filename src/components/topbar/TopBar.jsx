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



const TopBar = () => {
  const [ToggleMenu, setToggleMenu] = React.useState(false);
  const user = true;
  return (
    <>
      <div className="topbar">
        <Container maxWidth='xl'>
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
                  <AddIcon className='icon' />
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
              <MenuItem>
                <div className="menuitem first">
                  <Link to='/profile'>
                    <span>My Profile</span>
                  </Link>
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