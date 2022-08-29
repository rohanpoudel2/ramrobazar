import './genericproductcard.scss';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const GenericProductCard = () => {
  return (
    <div className="genericproductcard">
      <div className="wrapper">
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="productIMG"
          />
        </div>
        <div className="right">
          <div className="title">Electric Bike</div>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus quis esse optio odio. Laboriosam cum nisi voluptatibus quae sequi consequatur id repudiandae obcaecati ducimus, magnam neque sint, saepe explicabo.</p>
          <div className="price">
            रु 3500 | <span className="condition">Brand New</span>
          </div>
          <div className="location">
            <span>Kathmandu, Thamel</span>
            <span className="updated">Just Now</span>
          </div>
          <div className="bottom-bar">
            <span className="seller">Massice Bike Seller | 3 ads</span>
            <span className="icon">
              <BookmarkBorderIcon />
              Save
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenericProductCard