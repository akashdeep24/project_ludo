import './App.css';
import "tailwindcss/tailwind.css";
import LoginScreen from './screens/loginScreen';
import background from './assets/images/backgroundImage.png'
import Logo from './components/logo';
import MovingImage from './components/MovingImage';
import Home from './screens/Home';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';

function App() {
  return (
    <main style={{position: 'relative', overflow: 'auto', height:'100vh', width: '100vw' ,backgroundImage: 'linear-gradient(#013D7D,#0369D6,black)'}}>
      {/* <div class="mx-auto my-10 flex">
        <Logo/>
      </div> */}
      <Router>
        <TopBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        <BottomNav/>
      </Router>
      {/* <img src={background} style={{flex:1,zIndex:0,filter: 'opacity(0.5)', position: 'absolute',height: '100%', width:'100%'}}/> */}
      {/* <LoginScreen/> */}
      {/* <MovingImage/> */}
    </main>

  );
}

export default App;
