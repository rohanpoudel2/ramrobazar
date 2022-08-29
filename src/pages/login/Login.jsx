import './login.scss';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Login = () => {
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
        <div className="login-title">Login</div>
        <div className="login-details">
          <form>
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
        <button type='submit'>Log In</button>
        <div className="last-items">
          <span className="forgot">Forgot Password?</span>
          <span className="signup">Don't have an account?<ass> Sign Up</ass></span>
        </div>
      </div>
    </div >
  )
}

export default Login