import { Outlet } from "react-router-dom";
import Footer from "./static/Footer.jsx";
import Header from "./static/Header.jsx";
/* import CoinDetails from './pieces/CoinDetails';
import WatchList from './routes/WatchList';
import CoinChange from './pieces/CoinChange';
import CoinMenu from './pieces/CoinMenu'; */

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
