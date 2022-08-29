import './productcomment.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProductComment = () => {
  return (
    <div className="productcomment">
      <div className="user">
        <AccountCircleIcon className='user-icon' />
        <div className="user-info">
          <span className="name">Rohan Poudel</span>
          <span className="postedtime">yesterday</span>
        </div>
      </div>
      <div className="comment">
        Hello wrld comment
      </div>
    </div>
  )
}

export default ProductComment