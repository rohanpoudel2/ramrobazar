import './similarproduct.scss'
import SwiperProductCard from '../swiperproductcard/SwiperProductCard'

const SimilarProduct = () => {
  return (
    <div className="similarproduct">
      <div className="title-ma">Similar Product</div>
      <div className="products">
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
      </div>
      <span className='links'>
        RamroSelect | Terms of Use | Safety Tips | Posting Rules | FAQ | Contact | Report Bugs
      </span>
    </div>
  )
}

export default SimilarProduct