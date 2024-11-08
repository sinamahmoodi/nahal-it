import './khadamt-component.css';
import images from '../../asset/image'; // اطمینان حاصل کنید که این مسیر درست است.
import React from "react";

const Khadamat = () => {
    const servicesData = [
        {
          id: 1,
          title: "طراحی وب سایت اختصاصی",
          description:
            "توسط شرکت های طراح و توسعه دهنده وب حرفه ای انجام می شود که با توجه به نیاز مشتری، وب سایتی به صورت اختصاصی برای آنان طراحی می‌کنیم.",
          button: "مشاهده جزئیات",
          icon: <img src={images.image5} />
        },
        {
          id: 2,
          title: "خدمات کسب و کار",
          description:
            "جهت بهره بردن بهتر از کسب و کار های نوپا و انواع کسب و کارها میتوانید از راهنمای فروش و افزایش فروش برای کسب و کار، به شما کمک کند.",
          button: "مشاهده جزئیات",
          icon:  <img src={images.image6} />,
        },
        {
          id: 3,
          title: "خدمات گرافیکی",
          description:
            "کارهای مربوط به گرافیکی از جمله طراحی لوگو و برند و بروشورهایی که نیاز دارید با طراحی UX/UI سایت یا اپلیکیشن شما.",
          button: "مشاهده جزئیات",
          icon:  <img src={images.image7} />,
        },
        {
          id: 4,
          title: "خدمات تدوین فیلم",
          description:
            "جهت بهره برداری بهتر خدمات تدوین و تحویل فیلم ، کاربران میتوانند با نرم افزار تدوین حرفه ای از خدمات فیلم و تدوین استفاده کنند.",
          button: "مشاهده جزئیات",
          icon:  <img src={images.image8} />,
        },
      ];
    
      return (
      <div className="khadamat">
        <div className="services-container">
          <h2 className="services-title">خدمات ما</h2>
          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-button">{service.button}</button>
              </div>
            ))}
          </div>
          <button className="view-all-button">دیدن همه‌ی خدمات</button>
        </div>
        <div className="main1-5"></div>
      </div>
      );
    };

export default Khadamat;
