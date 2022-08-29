import './tabs.scss';

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GenericProductCard from '../genericproductcard/GenericProductCard';
import GridViewIcon from '@mui/icons-material/GridView';
import SwiperProductCard from '../swiperproductcard/SwiperProductCard';
import ViewListIcon from '@mui/icons-material/ViewList';


const TabPanel = (props) => {
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

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Tabss = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [toggleview, SetToggleView] = React.useState(true);

  const toggleView = () => {
    SetToggleView(!toggleview);
    console.log(toggleview)
  }

  return (
    <div className="tabs">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Recent" {...a11yProps(0)} />
            <Tab label="Recommendation" {...a11yProps(1)} />
            {toggleview &&
              <GridViewIcon className='change-icon' onClick={() => toggleView()} />
            }
            {!toggleview &&
              <ViewListIcon className='change-icon' onClick={() => toggleView()} />
            }
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {toggleview ?
            <>
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
            </>
            :
            <div className='gridProduct'>
              <SwiperProductCard />
              <SwiperProductCard />
              <SwiperProductCard />
              <SwiperProductCard />
            </div>
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
          {toggleview ?
            <>
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
              <GenericProductCard />
            </>
            :
            <div className='gridProduct'>
              <SwiperProductCard />
              <SwiperProductCard />
              <SwiperProductCard />
              <SwiperProductCard />
            </div>
          }
        </TabPanel>
      </Box>
    </div>
  )
}

export default Tabss