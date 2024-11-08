import './log-in-component.css'
import images from '../../asset/image';
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();
 
   const handleLoginClick = () => {
     navigate('/signin');
   };

   
    return(
        <div className="signup"> 

           <div className="form-signup">

              <div className="logo-div">
                 <img className="logo-div" src={images.image3} />
              </div>
              <div className="title-account">
                 <h1 className='title-signup'>حساب کاربری </h1>
                 <h5 className='bio-signup'>به نهال آی تی خوش آمدید - به حساب کاربری خود وارد شوید.</h5>
              </div>
              <div className="button-signup">
               <button className='log-in'>ورود</button>
               <button className='sign-up' onClick={handleLoginClick}>ثبت نام </button>
              </div>
              <hr className='hr-sign'/>
              <div className="input-signup">
                 <span>نام کاربری:</span>
                 <input className="input-user" type="text" />
                 <br/>
                 <span>رمز عبور:</span>
                 <input className="input-password" type="password" />
                 <span> <a>رمز عبور را فراموش کردید؟</a> </span>
              </div>
              <div className="signup-button">
               <button className='signup-button-child'> وارد شوید</button>
              </div>
              <div className="or-signgoogle">
               <hr className='hr-signup'/> <span className='txt-or'>یا وارد شوید با:</span> <hr className='hr-signup'/>
              </div>
              <div className="fag">
               <button className='fag-child'> <img src={images.facebook} /> </button>
               <button className='fag-child'> <img src={images.apple} /> </button>
               <button className='fag-child'> <img src={images.google} /> </button>
              </div>
           </div>
           <div className="img-div">
            <img className="img-div-child" src={images.signup} />
           </div>
        </div>
    )
   };

export default Login;