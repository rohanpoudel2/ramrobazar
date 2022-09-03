import './alert.scss';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import { close } from '../../redux/AddPostSlice'
import { useDispatch } from 'react-redux'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alerts = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    dispatch(close());
  };


  React.useEffect(() => {
    handleClick()
  }, [])

  return (
    <div className="alert">
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity='info' sx={{ width: '100%', backgroundColor: 'black' }}>
            <div className="alert-msg">
              <span>To use this feature, Please Login</span>
              <div className="btns">

                <button>
                  <Link to='/login'>
                    Login
                  </Link>
                </button>

                <button onClick={handleClose}>Cancle</button>
              </div>
            </div>
          </Alert>
        </Snackbar>
      </Stack>
    </div >
  )
}

export default Alerts