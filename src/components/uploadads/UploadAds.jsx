import './uploadads.scss';

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '../circularprogress/CircularProgress';
import AddIcon from '@mui/icons-material/Add';

import { useDispatch } from 'react-redux'
import { open, close } from '../../redux/AddPostSlice'


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
  outline: 'none'
};


const UploadAds = ({ toggle }) => {

  const openn = toggle;

  const dispatch = useDispatch()
  const handleOpen = () => dispatch(open());
  const handleClose = () => dispatch(close());

  React.useEffect(() => {
    if (toggle) {
      handleOpen()
    } else {
      handleClose()
    }
  }, [toggle])
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
              <CircularProgress step='1' />
              <div className="text">
                <span>Upload Photo</span>
                <span>Next Step: Description</span>
              </div>
            </div>
          </div>
          <div className="bottom">
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
            <div>
              <button>Next</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default UploadAds