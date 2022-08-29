import './categorylistitem.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CategoryListItem = ({ icon, title }) => {
  return (
    <div className="categorylistitem">
      <div className="categorylist">
        {icon}
        <span>
          {title}
        </span>
      </div>
      <ArrowForwardIosIcon className='icon' />
    </div>
  )
}

export default CategoryListItem