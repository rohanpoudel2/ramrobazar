import './swiperproductcard.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const SwiperProductCard = () => {
  return (
    <div className="swiperproductcard">
      <div className="productImg">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="productImage"
        />
      </div>
      <div className="title-bar">
        <div className="title">
          MotorCycle Salala
        </div>
        <MoreVertIcon />
      </div>
      <div className="condition-bar">
        <span>Like New</span>
      </div>
      <div className="bottom-bar">
        <span className="price">रु 94,321</span>
        <BookmarkBorderIcon className='icon' />
      </div>
    </div>
  )
}

export default SwiperProductCard