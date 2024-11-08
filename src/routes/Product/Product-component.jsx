import './Product-component.css';
import images from './../../asset/image';
const Product = () => {
  const ProductData = [
    {
      id: 1,
      icon: <img src={images.imagebaner1} />,
      title: "تمپلیت بلاگ اینستاگرام",
      bio:"شبکه اجتماعی",
      description:
        "تمپلیت اینستاگرام مناسب برای بلاگ های ....",
      price: "1.200.000تومان",
      button2: "افزودن به سبد خرید",
      button: "دیدن جزئیات",      
    },
    {
      id: 2,
      icon: <img src={images.imagebaner2} />,
      title: "قالب HTML سایت آرایشی",
      bio:"قالب سایت",
      description:
        "قالب کدنویسی شده ی وب سایت آرایشی مناسب برای سالن ها و ....",
      price: "5.900.000تومان",
      button2: "افزودن به سبد خرید",
      button: "دیدن جزئیات",      
    },
    {
      id: 3,
      icon: <img src={images.imagebaner3} />,
      title: "سایت آماده شرکتی",
      bio:"سایت آماده",
      description:
        "سایت آماده شرکتی مناسب شرکت ها و کمپانی های ...",
      price: "3.600.000تومان",
      button2: "افزودن به سبد خرید",
      button: "دیدن جزئیات",      
    }
  ];
    return (
      <div className="main-Product">
        <div className="header-Product">
           جدیدترین محصولات نهال آی تی
        </div>
        <div className="product-card1">
        {ProductData.map((Product) => (
              <div key={Product.id} className="product-card">
                <div className="product-icon">{Product.icon}</div>
              <div className='product-card-sec2'>  
                <h3 className="product-title">{Product.title}</h3>
                <h4 className="product-bio">{Product.bio}</h4>
                <p className="product-description">{Product.description}</p>
                <p className="product-price">{Product.price}</p>
                <button className="product-button2">{Product.button}</button>
                <button className="product-button">{Product.button2}</button>
              </div>
              </div>
            ))}
        </div>
        
        <div className='product-btn-div'>
           <button className='product-btn view-all-button'>دیدن همه محصولات</button>
        </div>
        <div className="main1-5"></div>
      </div>
    )
  };

export default Product;