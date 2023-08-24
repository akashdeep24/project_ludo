import './App.css';
import "tailwindcss/tailwind.css";
import LoginScreen from './screens/loginScreen';
import background from './assets/images/backgroundImage.png'
import Logo from './components/logo';
import MovingImage from './components/MovingImage';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';
import Home from './screens/Home';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';
import AuthLoading from './screens/AuthLoading';
import { AppProvider } from './Context/AppContext';
import CreateGame from './screens/CreateGame';

function App() {

  return (
    <main style={{position: 'relative', overflow: 'auto', height:'100vh', width: '100vw' ,backgroundImage: 'linear-gradient(#013D7D,#0369D6,black)'}}>
      <AppProvider >
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthLoading/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route path='/creategame' element={<CreateGame/>}/>
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
      </AppProvider>
      {/* <MovingImage/> */}
    </main>

  );
}

export default App;
