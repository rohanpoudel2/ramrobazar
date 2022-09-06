import './profile.scss';
import ShareIcon from '@mui/icons-material/Share';
import { Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import { useSelector } from 'react-redux';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = useSelector((state) => state.User.value.user)

  let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(user.metadata.createdAt)

  return (
    <div className="profile">
      <div className="left">
        <div className="top">
          <div className="user-avatar">
            <img
              src="https://www.clipartmax.com/png/middle/15-153139_big-image-login-icon-with-transparent-background.png"
              alt="userAvatar"
            />
            <span>To add new information to profile</span>
          </div>
        </div>
        <div className="bottom">
          <button>Edit Profile</button>
          <ShareIcon className='icon' />
        </div>
        <Divider />
        <div className="leftbottom">
          <span className="username">{user.displayName}</span>
          <span className="details">{user.phoneNumber || 'Add Phone'} | {user.email}</span>
          <div className="since">Member Since: {date}</div>
          <div className="location">
            <LocationOnIcon />
            Kathmandu
          </div>
          <div className="reviews">
            <div className="start">
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Ad Post" {...a11yProps(0)} />
              <Tab label="Analytics" {...a11yProps(1)} />
              <Tab label="Saved List" {...a11yProps(2)} />
              <Tab label="Reviews" {...a11yProps(3)} />
              <MoreVertIcon className='icon' />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="no">
              <img
                src="https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?w=1480&t=st=1661916442~exp=1661917042~hmac=796eb00ed73ffad4f44964daf43ff98e6d541289360fc6127b5cb6c1d0e43748"
                alt="noPost"
                className='nopost'
              />
              <span>You have not posted any ad yet</span>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <div className="analytics-item">
                    <div className="top">
                      66
                    </div>
                    <div className="bottom">
                      <RemoveRedEyeIcon className='icon' />
                      <span>Views</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="analytics-item">
                    <div className="top">
                      66
                    </div>
                    <div className="bottom">
                      <CommentIcon className='icon' />
                      <span>Comments</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="analytics-item">
                    <div className="top">
                      66
                    </div>
                    <div className="bottom">
                      <CheckCircleIcon className='icon' />
                      <span>Sold</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="analytics-item">
                    <div className="top">
                      66
                    </div>
                    <div className="bottom">
                      <Inventory2Icon className='icon' />
                      <span>Reported</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="analytics-item">
                    <div className="top">
                      66
                    </div>
                    <div className="bottom">
                      <Inventory2Icon className='icon' />
                      <span>Total ads</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="wishlist">
              <img
                src="https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?w=1480&t=st=1661916442~exp=1661917042~hmac=796eb00ed73ffad4f44964daf43ff98e6d541289360fc6127b5cb6c1d0e43748"
                alt="noWishList"
              />
              <span>You have no items in your wishlist. Add items to your wishlist to see them here. You can export products from Here</span>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="reviews-section">
              <img
                src="https://img.freepik.com/free-vector/online-review-concept-illustration_114360-1398.jpg?w=1380&t=st=1661916906~exp=1661917506~hmac=56b41436658c485dc789547fdd0f7f18f5c25b876db1acd5c6b4b780aa618f31"
                alt="noReviews"
              />
              <span>No Reviews Yet</span>
            </div>
          </TabPanel>
        </Box>
      </div>
      <div className="right">
        <span>
          RamroSelect | Terms of Use | Safety Tips | Posting Rules | FAQ | Contact | Report Bugs
        </span>
      </div>
    </div>
  )
}

export default Profile