import './login.scss';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';

const Login = () => {

  const [login, setLogin] = useState(true)
  const [ack, setAck] = useState(false)

  return (
    <div className="login">
      <div className="left">
        <img
          src="https://visme.co/blog/wp-content/uploads/2020/04/Use-character-animations.gif"
          alt="loginImg"
        />
      </div>
      <div className="right">
        <div className="existingUsers">
          <div className="left">
            <span className='top'>For Existing Users</span>
            <span className="bottom">Verify Email <h1 className="last"> Here</h1></span>
          </div>
          <div className="right">
            <img src="https://previews.123rf.com/images/olegtoka/olegtoka1904/olegtoka190400048/122980080-illustration-of-set-e-commerce-shop-and-business-seamless-pattern.jpg" alt="login" />
          </div>
        </div>
        <div className="login-title"> {login ? 'Login' : 'Sign Up'}</div>
        <div className="login-details">
          <form>
            {!login &&
              <div className="form-item">
                <input type="text" placeholder='Full Name' />
              </div>
            }
            <div className="form-item">
              <span>🇳🇵</span>
              <input type="text" placeholder='Phone Number' />
            </div>
            <div className="form-item">
              <input type="password" placeholder='Password' />
              <RemoveRedEyeIcon className='icon' />
            </div>
          </form>
        </div>
        {!login &&
          <div className="ack">
            <input type="checkbox" onClick={() => { setAck(!ack) }} />
            <span>I hereby accept all the Terms and Conditions of Ramrobazar.</span>
          </div>
        }
        <button type='submit'>{!login ? 'Sign Up' : 'Log In'}</button>
        <div className="last-items">
          {!login &&
            <span className="forgot">Forgot Password?</span>
          }
          <span className="signup" onClick={() => { setLogin(!login) }}>{!login ? 'Already have an account ?' : 'Don\'t have an account?'}<ass>{!login ? 'Login' : 'Sign Up'}</ass></span>
        </div>
      </div >
    </div >
  )
}

export default Login