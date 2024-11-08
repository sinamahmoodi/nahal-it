import images from "../../asset/image";
import './footer-component.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="info-footer">
              <div className="info-footer-child">
                <div className="logo">
                    <img className="footer-img" src={images.image3}/>
                </div>
                <div className="etemad">
                    <div>
                    <span> نماد اعتماد الکترونیکی:</span>
                    </div>
                    <img src={images.etemad} />
                    <div>
                    <span>عضو اتحادیه کسب و کارهای مجازی</span>
                    </div>
                </div>
              </div>
              <div className="link-footer">
                  <div className="link1">
                    <div className="title-link">
                      لینک های مهم
                    </div>
                    <div className="hr">
                      <div className="hr-child">

                      </div>
                      <hr/>
                    </div>
                    <div className="a-link">
                      <a href="#" className="a">ثبت سفارش</a>
                      <a href="#" className="a">استخدام</a>
                      <a href="#" className="a">بلاگ</a>
                      <a href="#" className="a">تماس باما</a>
                      <a href="#" className="a">سیاست و حریم خصوصی</a>
                    </div>
                  </div>
                  <div className="link2">
                    <div className="title-link">
                    خدمات 
                    </div>
                    <div className="hr">
                      <div className="hr-child">

                      </div>
                      <hr/>
                    </div>
                    <div className="a-link">
                      <a href="#" className="a">ایمیل مارکتینگ</a>
                      <a href="#" className="a">ربات شبکه های اجتماعی</a>
                      <a href="#" className="a">تولیدمحتوا</a>
                      <a href="#" className="a">تدوین</a>
                      <a href="#" className="a">گرافیک</a>
                    </div>
                  </div>
                </div>
                <div className="adress">
                  <div className="adress-txt">
                  آدرس:
                  <br/>
                  تهران - میدان فردوسی - خیابان ایرانشهر - بین سمیه و طالقانی - مجتمع تجاری میلاد - واحد 9
                  </div>
                  <br/>
                  <div className="num">
                  تلفن:
                  <br/>
                  02188867940
                  <br/>
                  09927674217
                  </div>
                  <br/>
                  <div className="social">
                  شبکه های اجتماعی:
                  <br/>
                  
                  <a href="#" className="a-social">اینستاگرام </a>
                  <a href="#" className="a-social">تلگرام </a>
                  <a href="#" className="a-social">ایکس  </a>
                  <a href="#" className="a-social">یوتیوب </a>
                  <a href="#" className="a-social">آپارات </a>
                  </div>
                </div>
            </div>
              <div className="circle"><div className="circle-dark"></div></div>
        </div>
    )
};

export default Footer;