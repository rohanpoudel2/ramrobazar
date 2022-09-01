import './uploadads.scss';

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '../circularprogress/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useDispatch } from 'react-redux'
import { open, close } from '../../redux/AddPostSlice'
import { Divider, Switch } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import GenericProductCard from '../genericproductcard/GenericProductCard'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  width: '50vw',
  height: '75vh',
  borderRadius: '10px',
  outline: 'none',
  overflow: 'scroll'
};


const UploadAds = ({ toggle }) => {

  const [stepCounter, setStepCounter] = React.useState(1);
  console.log(stepCounter)
  const openn = toggle || false;

  const dispatch = useDispatch()
  const handleOpen = () => {
    dispatch(open())
  };
  const handleClose = () => {
    dispatch(close())
    setStepCounter(1)
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  React.useEffect(() => {
    if (toggle) {
      handleOpen()
    } else {
      handleClose()
    }
  }, [toggle, stepCounter])
  console.log(toggle)
  return (
    <div className="uploadads">
      <Modal
        open={openn}
        onClose={handleClose}
      >
        <Box sx={style} className='box'>

          <div className="top">
            <div className="top-bar">
              <span>Post Ads</span>
              <CloseIcon className='icon' onClick={() => handleClose()} />
            </div>
            <div className="bottom-bar">
              <CircularProgress step={stepCounter} />
              <div className="text">
                <span>Upload Photo</span>
                <span>Next Step: Description</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            {stepCounter === 1 &&
              <div className="b-top">

                <input type="text" placeholder='Ad Title *' />
                <div className="rnd">
                  <span>For example: Brand, Model, Color, and size</span>
                  <span className="counter">0/50</span>
                </div>
                <div className="upload">
                  <input type="file" id='file' name='file' hidden />
                  <label htmlFor="file">
                    <AddIcon className='icon' />
                  </label>
                  <span>Choose a photo *</span>
                </div>
              </div>
            }
            {
              stepCounter === 2 &&
              <div className="second-step">
                <select name="category" id="category">
                  <option selected disabled>Category *</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <select name="condition" id="condition">
                  <option selected disabled>Condition *</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <Divider />
                <div className="location">
                  <input type="text" placeholder='Entire Nepal' />
                  <LocationOnIcon className='icon' />
                </div>
                <div className="hide">
                  <input type="checkbox" />
                  <label>Hide my precise location.</label>
                </div>
                <div className="desc">
                  <input type="text" placeholder='Description *' />
                </div>
                <div className="type">
                  <div className="type-item">
                    <span>Delivery</span>
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </div>
                  <div className="type-item">
                    <span>Is Adult Content?</span>
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </div>
                </div>
              </div>
            }
            {
              stepCounter === 3 &&
              <div className="third-step">
                <input type="text" placeholder='रु Price *' />
                <span>Double check the price value you keep.</span>
                <div className="subhead">
                  Expiry Date
                </div>
                <select name="expiry" id="expiry">
                  <option value="1 Month">1 Month</option>
                  <option value="10 Days">10 Days</option>
                </select>
                <h3>Negotiable</h3>
                <div className="type">
                  <div className="type-item">
                    <label>Can negotiate for price</label>
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </div>
                </div>
              </div>
            }
            {
              stepCounter === 4 &&
              <div className="fourth-step">
                <span>Your Ad will look like this</span>
                <div className="ad-preview">

                  <GenericProductCard />
                </div>
              </div>
            }
            <div className='buttons'>
              {stepCounter !== 1 &&
                <button className="backbtn" onClick={() => { setStepCounter(stepCounter - 1) }}><ArrowBackIcon className='icon' /> Back</button>
              }
              <button onClick={() => { setStepCounter(stepCounter + 1) }}>Next</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default UploadAds