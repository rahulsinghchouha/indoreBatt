import './App.css';
import Navbar from './Components/Common/Navbar';
import Menus from './Components/Common/Menus';
import Adverties from './Components/Common/Adverties';
import Main from './Components/Main';
import Dividers from './Components/Divider';
import KnowMore from './Components/KnowMore';
import ShopCar from './Components/ShopCarBattery';
import Review from './Components/Common/Reveiw';
import Address from './Components/Common/Address';
import Footer from './Components/Common/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menus/>
      <Adverties/>
      <Main />
      <Dividers />
      <KnowMore />
      <ShopCar />
      <Review />
      <Address/>
      <Footer/>
    </div>
  );
}

export default App;
