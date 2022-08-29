import './productsidebar.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MessageIcon from '@mui/icons-material/Message';

const ProductSideBar = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <span>
          <img src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='paginated img' />
        </span>
      );
    },
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="productsidebar">
      <div className="wrapper">
        <Slider {...settings}>
          <img src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='productImg' className='productimg' />
          <img src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='productImg' className='productimg' />
          <img src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='productImg' className='productimg' />
        </Slider>
      </div>
      <div className="viewcondition-bar">
        <span>
          <VisibilityIcon className='icon' />
          <span>
            1,324 Views
          </span>
        </span>
        <span className="condition">Like New</span>
        <span className="price">रु 43,212</span>
      </div>
      <div className="seller-bar">
        <AccountCircleIcon className='icon' />
        <div className="seller-info">
          <div className='info'>
            Rohan Poudel | <span className="ads">1 ads</span>
          </div>
          98087437123
        </div>
      </div>
      <div className="btn-bar">
        <button>
          <BookmarkBorderIcon />
          Save
        </button>
        <button>
          <MessageIcon />
          Chat Now
        </button>
      </div>
      <div className="info-bar">
        <p>Note: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis alias voluptatum delectus, vitae itaque, exercitationem rerum sunt tempore consequuntur sint doloremque laudantium in repudiandae est, aspernatur earum eaque vero!</p>
      </div>
    </div>
  )
}

export default ProductSideBar