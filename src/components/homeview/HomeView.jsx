import CategorySideBar from '../categorysidebar/CategorySideBar';
import './homeview.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProductSwiper from '../productswiper/ProductSwiper';
import Tabss from '../tabs/Tabs';

const HomeView = () => {
  return (
    <div className="homeview">
      <div className="left">
        <CategorySideBar />
      </div>
      <div className="right">
        <div className="top-part">
          <div className="top">
            <div className="title">
              <span>Top Viewed</span>
              <div className="bar">

              </div>
            </div>
            <div className="arrows">
              <ArrowBackIosIcon />
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="bottom">
            <ProductSwiper />
          </div>
        </div>
        <div className="bottom-part">
          <div className="left">
            <div className="top-bar">
              <Tabss />
            </div>
          </div>
          <div className="main-right">
            <span>
              RamroSelect | Terms of Use | Safety Tips | Posting Rules | FAQ | Contact | Report Bugs
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView