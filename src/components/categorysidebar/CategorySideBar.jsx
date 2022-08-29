import CategoryListItem from '../categorylistitem/CategoryListItem';
import './categorysidebar.scss';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Face2Icon from '@mui/icons-material/Face2';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SpaIcon from '@mui/icons-material/Spa';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ComputerIcon from '@mui/icons-material/Computer';
import PowerIcon from '@mui/icons-material/Power';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EggIcon from '@mui/icons-material/Egg';
import ChairIcon from '@mui/icons-material/Chair';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PetsIcon from '@mui/icons-material/Pets';
import HouseIcon from '@mui/icons-material/House';

const categoryData = [
  {
    "icon": <RssFeedIcon />,
    "title": 'RamroSelect'
  },
  {
    "icon": <Face2Icon />,
    "title": 'Apparels & Accessories'
  },
  {
    "icon": <TwoWheelerIcon />,
    "title": 'Automobiles'
  },
  {
    "icon": <SpaIcon />,
    "title": 'Beauty & Health'
  },
  {
    "icon": <LibraryBooksIcon />,
    "title": 'Books & Learning'
  },
  {
    "icon": <HomeRepairServiceIcon />,
    "title": 'Business & Industrial'
  },
  {
    "icon": <ComputerIcon />,
    "title": 'Computer & Peripherals'
  },
  {
    "icon": <PowerIcon />,
    "title": 'Electronics, Tvs & More'
  },
  {
    "icon": <EventAvailableIcon />,
    "title": 'Events & Happenings'
  },
  {
    "icon": <EggIcon />,
    "title": 'Fresh Veggies & Meat'
  },
  {
    "icon": <ChairIcon />,
    "title": 'Furnishings & Appliances'
  },
  {
    "icon": <DocumentScannerIcon />,
    "title": 'Jobs'
  },
  {
    "icon": <PhoneAndroidIcon />,
    "title": 'Mobile Phones & Accessories'
  },
  {
    "icon": <MusicNoteIcon />,
    "title": 'Music Instruments'
  },
  {
    "icon": <PetsIcon />,
    "title": 'Pet Care'
  },
  {
    "icon": <HouseIcon />,
    "title": 'Real Estate'
  },
];

const CategorySideBar = () => {
  return (
    <div className="categorysidebar">
      <div className="title">
        All Categories
      </div>
      <hr />
      {categoryData.map((data) =>
        <CategoryListItem icon={data.icon} title={data.title} />
      )}

    </div>
  )
}

export default CategorySideBar