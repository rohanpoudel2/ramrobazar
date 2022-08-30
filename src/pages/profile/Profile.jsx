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

  return (
    <div className="profile">
      <div className="left">
        <div className="top">
          <div className="user-avatar">
            <img
              src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
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
          <span className="username">Rohan</span>
          <span className="details">9801232123 | rohanpoudel@duck.com</span>
          <div className="since">Member Since: 2020-03-05</div>
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
                src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000"
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
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Box>
      </div>
      <div className="right">right</div>
    </div>
  )
}

export default Profile