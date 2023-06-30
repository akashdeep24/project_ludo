import './App.css';
import BottomNav from './components/BottomNav';
import Header from './components/Navbar';
import "tailwindcss/tailwind.css";
import AllGames from './screens/AllGames';
function App() {
  return (
    <main>
      <AllGames/>
      <BottomNav/>
    </main>

  );
}

export default App;
