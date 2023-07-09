import './App.css';
import BottomNav from './components/BottomNav';
import Header from './components/Navbar';
import "tailwindcss/tailwind.css";
import LoginScreen from './screens/loginScreen';
import CreateGame from './screens/CreateGame';
import background from './assets/images/backgroundImage.png'
import Logo from './components/logo';
function App() {
  return (
    <main style={{position: 'relative', overflow: 'auto', height:'100vh', width: '100vw' ,backgroundImage: 'linear-gradient(#013D7D,#0369D6,black)'}}>
      {/* <div class="mx-auto my-10 flex">
        <Logo/>
      </div> */}
      {/* <img src={background} style={{flex:1,zIndex:0,filter: 'opacity(0.5)', position: 'absolute',height: '100%', width:'100%'}}/> */}
      <CreateGame/>
      <BottomNav/>
      {/* <LoginScreen/> */}
    </main>

  );
}

export default App;
