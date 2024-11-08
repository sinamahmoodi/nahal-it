import './why.component.css'
import images from './../../asset/image';

const why = () =>
{
    return(
    <div class='main-why'>
        <div className="txt-h">
        <div className="h3">
        <h3 >بهترین ها مارا انتخاب میکنند... </h3>
        </div>
        <div className="h1">
        <h1>چرا باید نهال آی تی را انتخاب کنید؟ </h1>  
        </div>
        </div>
        <div className="box-why">
            <div className="box-why-child">
                <div className="image-why">
                <img src={images.imageinfo1} />
                </div>
                <div className="text-why">
                پرداخت اقساطی 
                <br/>
                به صورت آنلاین
                </div>
            </div>
            <div className="box-why-child">
                <div className="image-why">
                <img src={images.imageinfo2} />
                </div>
                <div className="text-why">
                طراحی استاندارد
                <br/>
                طرح ارسالی
                </div>
            </div>
            <div className="box-why-child">
                <div className="image-why">
                <img src={images.imageinfo3} />
                </div>
                <div className="text-why">
                تحویل فوری
                <br/>
                با بالاترین کیفیت
                </div>
            </div>
            <div className="box-why-child">
                <div className="image-why">
                <img src={images.imageinfo4} />
                </div>
                <div className="text-why">
                پشتیبانی قوی 
                <br/>
                به صورت آنی
                </div>
            </div>
        </div>
        <div className="main1-5"></div>
    </div>
    )
};
export default why;