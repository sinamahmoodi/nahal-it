// App.js
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Home from './routes/home/home.component';
import Khadamat from "./routes/khadamat/khadamat-component";
import About from "./routes/about/about-component";
import Product from "./routes/Product/Product-component";
import Why from "./routes/why/why.component";
import Price from "./routes/price/price-component";
import Login from "./routes/log-in/log-in-component";
import Signin from "./routes/sign-in/sign-in-component";
import Footer from "./routes/footer/footer-component";
import images from './asset/image';
import './App.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="nav">
        {/* Navbar Logo */}
        <div className="navbar-logo">
          <img src={images.image3} alt="Nahalat IT Logo" />
        </div>

        {/* Menu Links Section */}
        <div className="navbar-links">
          <a href="#products">محصولات</a>
          &nbsp;
          <a href="#projects">نمونه کار ها</a>
          &nbsp;
          <a href="#blog">بلاگ</a>
          &nbsp;
          <a href="#services">خدمات ما</a>
          &nbsp;
          <a href="#contact">تماس با ما</a>
          &nbsp;
          <a href="#jobs">استخدام</a>
        </div>

        {/* Navbar Search and Buttons */}
        <div className="navbar-search">
          <img src={images.image4} alt="Search Icon" />
          <i className="fa fa-search"></i>
        </div>
        <div className="navbar-menu">
          <button className="seller-btn">فروشنده شوید</button>
          <button className="login-btn" onClick={handleLoginClick}>ورود / عضویت</button>
        </div>
      </div>

      <Outlet />

      {/* Page Sections */}
      <section id="services" style={{ height: '100vh', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Khadamat />
      </section>
      <section id="about" style={{ height: '100vh', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <About />
      </section>
      <section id="products" style={{ height: '100vh', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Product />
      </section>
      <section id="why" style={{ height: '100vh', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Why />
      </section>
      <section id="price" style={{ height: '100vh', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Price />
      </section>
      <section id="footer" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Footer />
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<Signin />}/>
    </Routes>
  );
};

export default App;
