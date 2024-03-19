import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home1 from './pages/Home1';
import Landingpage from './pages/Landingpage';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
     <Routes>
      <Route path={'/'}element={<Landingpage/>}/>
      <Route path={'/home1'}element={<Home1/>}/>
      <Route path={'/watchhistory'}element={<WatchHistory/>}/>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
