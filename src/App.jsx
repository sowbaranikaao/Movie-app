import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import './App.css'
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { WatchListProvider } from './context/WatchListContext.jsx';
function App() {

  return (
    <WatchListProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      </BrowserRouter>
      </WatchListProvider>
  )
}

export default App;
