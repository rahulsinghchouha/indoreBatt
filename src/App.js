import { Menu } from 'antd';
import './App.css';
import Navbar from './Components/Common/Navbar';
import Menus from './Components/Common/Menus';
import Adverties from './Components/Common/Adverties';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menus/>
      <Adverties/>
      
    </div>
  );
}

export default App;
