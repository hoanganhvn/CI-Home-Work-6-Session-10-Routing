import Auth from './Components/Auth';
import Home from './Components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Invoices from './Components/Invoices';
import InvoicesDetail from './Components/InvoicesDetail';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import About from './Components/About';
import Header from './Components/Header';
import Layout from './Components/Layout';
import NoPage from './Components/NoPage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} >
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="invoices" element={<Invoices />} >
            <Route path=":invoicesId" element={<InvoicesDetail />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
