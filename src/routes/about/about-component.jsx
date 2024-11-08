import './about-component.css'
import images from '../../asset/image'; // اطمینان حاصل کنید که این مسیر درست است.
import React from "react";

const About = () =>
{
    return (
        <div className="mainn">
        <div className="mian-about">
             <div className="main-txt-about">
              <div className="main-txt2-about">
              درباره ی ما
              </div>
              <div className="main-btn-about">
                  <div
                  className="main-txt3">
                     وب سایت نهال آی تی اولین فروشگاه حوزه ی آی تی در ایران است که محصولات دیجیتالی ای همچون وب سایت های آماده و قالب سایت و ... را به فروش می رساند و خدمات دیجیتالی را هم ارائه میدهد.این فروشگاه در سال ...
                  </div>
                  <button
                  className="main-btn-3">
                     ادامه ...
                  </button>
              </div>
            </div>
            <div className="main-img">
              <img className="img1" src={images.image2} />
            </div>
        </div>
        <div className="main1-5"></div>
        </div>
    )
}
export default About;