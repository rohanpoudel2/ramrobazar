import './login.scss';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { app } from '../../firebase/config';

const Login = () => {

  const [login, setLogin] = useState(true)
  const [ack, setAck] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState({
    err: false,
    msg: ''
  });

  const auth = getAuth(app);

  const handleLogin = () => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError({
          err: false,
          msg: ''
        })
        setLoading(false)
      })
      .catch((error) => {
        setError({
          err: true,
          msg: error.message
        })
        setLoading(false)
      });
  }

  const handelSignUp = () => {
    if (ack) {
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: username
          })
          setError({
            err: false,
            msg: ''
          })
          setLoading(false)
        })
        .catch((error) => {
          setError({
            err: true,
            msg: error.message
          })
          setLoading(false)
        });
    } else {
      alert('Please agree to Terms and conditions')
    }
  }



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

            <div className="form-item">
              <input type="mail" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            {!login &&
              < div className="form-item">
                <input type="text" placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
              </div>
            }
            <div className="form-item">
              <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
              <RemoveRedEyeIcon className='icon' />
            </div>
          </form>
          {
            error.err &&
            <div className="error">
              Massive Error: {error.msg.split('/')[1].split(')')[0].toUpperCase()}
            </div>
          }
        </div>
        {
          !login &&
          <div className="ack">
            <input type="checkbox" onClick={() => { setAck(!ack) }} />
            <span>I hereby accept all the Terms and Conditions of Ramrobazar.</span>
          </div>
        }
        <button type='submit' onClick={login ? handleLogin : handelSignUp}>{loading ? 'Loading...' : !login ? 'Sign Up' : 'Log In'}</button>
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