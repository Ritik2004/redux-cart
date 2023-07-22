
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from  './store/store.js';

function App() {
  return (
    <div className='App'>
    <Provider store={store}>
   <Router>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
   </Router>
   </Provider>
   </div>
  );
}
export default App;
