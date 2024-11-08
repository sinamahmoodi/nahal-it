import { Outlet } from "react-router-dom";
import '../home/home-component.css'
import images from '../../asset/image'


const Home = () => {
    return (
        <div className="mainn">
        <div className="mian">
             <div className="main-txt">
              <div className="main-txt1">
              اولین وبسایت خدماتی فروشگاهی در حوزه آی تی در ایران
              </div>
              <div className="main-txt2">
               هر آنچه از حوزه آی تی  
              <br/>
              نیاز دارید همینجاست!
              </div>
              <ul>
                  <li>فروش سایت های آماده</li>
                  <li>طراحی سایت اختصاصی</li>
                  <li>موشن گرافیک</li>
                  <li>خدمات شبکه های اجتماعی بدون پیش پرداخت</li>
              </ul>
              <div className="main-btn">
                  <button
                  className="main-btn-1">
                      درباره ما
                  </button>
                  <button
                  className="main-btn-2 ">
                      دیدن محصولات 
                  </button>
              </div>
            </div>
            <div className="main-img">
              <img className="img1" src={images.image1} />
            </div>
        </div>
        <div className="main1-5"></div>
        <div className="main2">
            
        </div>
        </div>
    );
};

<Outlet />
export default Home;