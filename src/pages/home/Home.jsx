import HomeView from "../../components/homeview/HomeView";
import TopSearch from "../../components/topsearch/TopSearch"
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <TopSearch />
      <div className="banner">
        <img
          src="https://cdn02.hamrobazaar.com/Admin/AdContentDesktop/2022/3/25/esewa_home_top_banner_1260_120_desktop1.gif"
          alt=""
        />
      </div>
      <HomeView />
    </div>
  )
}

export default Home