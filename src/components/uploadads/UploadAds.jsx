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

import { useForm, Controller } from 'react-hook-form';

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
  const [formData, setFormDate] = React.useState({});

  const openn = toggle || false;

  const dispatch = useDispatch()
  const handleOpen = () => {
    dispatch(open())
  };
  const handleClose = () => {
    dispatch(close())
    setStepCounter(1)
  };

  React.useEffect(() => {
    if (toggle) {
      handleOpen()
    } else {
      handleClose()
    }
  }, [toggle, stepCounter])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    setStepCounter(stepCounter + 1)
    setFormDate(data)
    console.log(data)
  };

  const btns = () => {
    return (
      <div className='buttons'>
        {stepCounter !== 1 &&
          <button type='button' className="backbtn" onClick={() => { setStepCounter(stepCounter - 1) }}><ArrowBackIcon className='icon' /> Back</button>
        }
        {
          stepCounter !== 4 &&
          <button type='submit'>Next</button>
        }
      </div>
    )
  }

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="b-top">
                  <input placeholder='Ad Title *' {...register('adTitle', { required: true, maxLength: 50 })} />
                  {errors.adTitle?.type === 'required' && <>
                    <span style={{ color: 'red', fontWeight: 600 }}>
                      *Your Ad Title is required
                    </span>
                  </>}
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
                {btns()}
              </form>
            }
            {
              stepCounter === 2 &&
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="second-step">
                  <select name="category" id="category" {...register('adCategory', { required: true })}>
                    <option value='' selected disabled>Condition *</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  {errors.adCategory?.type === 'required' && <>
                    <span style={{ color: 'red', fontWeight: 600 }}>
                      *Your Ad Category is Required
                    </span>
                  </>}
                  <select name="condition" id="condition" {...register('adCondition', { required: true })}>
                    <option value='' selected disabled>Condition *</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  {errors.adCondition?.type === 'required' && <>
                    <span style={{ color: 'red', fontWeight: 600 }}>
                      *Your Ad Condition is Required
                    </span>
                  </>}
                  <Divider />
                  <div className="location">
                    <input type="text" placeholder='Entire Nepal' {...register('adLocation', { required: true })} />
                    <LocationOnIcon className='icon' />
                  </div>
                  {errors.adCategory?.type === 'required' && <>
                    <span style={{ color: 'red', fontWeight: 600 }}>
                      *Your Ad Location is Required
                    </span>
                  </>}
                  <div className="hide">
                    <input type="checkbox" {...register('adHideLocation', { required: false })} />
                    <label>Hide my precise location.</label>
                  </div>
                  <div className="desc" >
                    <input type="text" placeholder='Description *'{...register('adDescription', { required: true })} />
                    {errors.adDescription?.type === 'required' && <>
                      <span style={{ color: 'red', fontWeight: 600 }}>
                        *Your Ad Description is Required
                      </span>
                    </>}
                  </div>
                  <div className="type">
                    <div className="type-item">
                      <span>Delivery</span>
                      <Controller
                        control={control}
                        name='adDelivery'
                        defaultValue={false}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <Switch onChange={onChange} checked={value} />
                          </>
                        )}
                      />
                    </div>
                    <div className="type-item">
                      <span>Is Adult Content?</span>
                      <Controller
                        control={control}
                        name='adAdultContent'
                        defaultValue={false}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <Switch onChange={onChange} checked={value} />
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {btns()}
              </form>
            }
            {
              stepCounter === 3 &&
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="third-step">
                  <input type="number" placeholder='रु Price *' {...register('adPrice', {
                    required: true,
                    valueAsNumber: true
                  })} />
                  <span>Double check the price value you keep.</span>
                  {errors.adPrice?.type === 'required' && <>
                    <span style={{ color: 'red', fontWeight: 600 }}>
                      *Your Ad Price is Required
                    </span>
                  </>}
                  <div className="subhead">
                    Expiry Date
                  </div>
                  <select name="expiry" id="expiry" {...register('adExpiryTime', {
                    required: true
                  })}>
                    <option value="1 Month">1 Month</option>
                    <option value="10 Days">10 Days</option>
                  </select>
                  {errors.adExpiryTime?.type === 'required' && <>
                    <span style={{ color: 'red', fontWeight: 600 }}>
                      *Your Ad Expire Time is Required
                    </span>
                  </>}
                  <h3>Negotiable</h3>
                  <div className="type">
                    <div className="type-item">
                      <label>Can negotiate for price</label>
                      <Controller
                        control={control}
                        name='adNegotiate'
                        defaultValue={false}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <Switch onChange={onChange} checked={value} />
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {btns()}
              </form>
            }
            {
              stepCounter === 4 &&
              <form>
                <div className="fourth-step">
                  <span>Your Ad will look like this</span>
                  <div className="ad-preview">
                    <GenericProductCard adInfo={formData} />
                  </div>
                </div>
                {btns()}
              </form>
            }
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default UploadAds