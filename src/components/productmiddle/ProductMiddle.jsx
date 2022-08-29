import './productmiddle.scss';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ProductComment from '../productcomment/ProductComment';

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

const ProductMiddle = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="productmiddle">
      <div className="title">
        <span className="title-text">Electric Bike</span>
        <span className='brand'>(Brand)</span>
      </div>

      <div className="tab">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Comments" {...a11yProps(1)} />
              <Tab label="Location" {...a11yProps(2)} />
              <ShareIcon className='icon' />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium eveniet consequuntur. Excepturi eum velit voluptatibus consequatur voluptatem sed neque, aspernatur delectus harum, mollitia aliquid atque unde. Inventore, commodi corporis?
            </p>
            <div className="sub-title">
              General
            </div>
            <div className="product-details">
              <div className="detail">
                <div className="left">AD ID</div>
                <div className="right">123</div>
              </div>
              <div className="detail">
                <div className="left">Location</div>
                <div className="right">Kathmandu, Thamel</div>
              </div>
              <div className="detail">
                <div className="left">Delivery</div>
                <div className="right"><LocalShippingIcon /> Available</div>
              </div>
              <div className="detail">
                <div className="left">Negotiable</div>
                <div className="right">Not Negotiable</div>
              </div>
              <div className="detail">
                <div className="left">Ads Posted</div>
                <div className="right">5 days ago</div>
              </div>
              <div className="detail">
                <div className="left">Ads Expiry</div>
                <div className="right">2022-09-22</div>
              </div>
            </div>
            <div className="sub-title">
              Specifications
            </div>
            <div className="product-details">
              <div className="detail">
                <div className="left">Used For</div>
                <div className="right">12 Years</div>
              </div>
              <div className="detail">
                <div className="left">Delivery Charge</div>
                <div className="right">500</div>
              </div>
              <div className="detail">
                <div className="left">Warranty</div>
                <div className="right">Yes</div>
              </div>
              <div className="detail">
                <div className="left">Transmission</div>
                <div className="right">Manual- 2WD</div>
              </div>
              <div className="detail">
                <div className="left">Color</div>
                <div className="right">Orange</div>
              </div>
              <div className="detail">
                <div className="left">Delivery Area</div>
                <div className="right">Kathmandu</div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProductComment />
            <ProductComment />
            <ProductComment />
            <ProductComment />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <iframe
              title='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.1469163700585!2d85.3078937261398!3d27.715018129109122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b1deffed8d4!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1661772802515!5m2!1sen!2snp"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </TabPanel>
        </Box>
      </div>
    </div>
  )
}

export default ProductMiddle