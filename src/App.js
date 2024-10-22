import './App.css';
import Navbar from './Components/Common/Navbar';
import Menus from './Components/Common/Menus';
import Adverties from './Components/Common/Adverties';
import Main from './Components/Main';
import Dividers from './Components/Divider';
import KnowMore from './Components/KnowMore';
import ShopCar from './Components/ShopCarBattery';
import { RiCodeView } from 'react-icons/ri';
import Review from './Components/Common/Reveiw';

function App() {
  return (
    <div className="App">
      <Navbar className="fixed m-2" />
      <Menus className="fixed m-2" />
      <Adverties className="fixed p-2" />
      <Main />
      <Dividers />
      <KnowMore />
      <ShopCar />
      <Review />
    </div>
  );
}

export default App;
