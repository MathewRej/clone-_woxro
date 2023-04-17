import React from 'react'
import DigitalMarketing from './DigitalMarketing'
import Ecommerce from './Ecommerce'
import GraphicsDesigning from './GraphicsDesigning'
import MobileApp from './MobileApp'
import './Servicelists.css'
import WebApplication from './WebApplication'
import WebDesigning from './WebDesigning'

// import webDesigningLogo from '../images/webdesigning.png'
// import WebApplicationLogo from '../images/webapplication.png'
// import MobileAppLogo from '../images/mobileappdevelopment.png'
// import EcommerceLogo from '../images/ecommercedevelopment.png'
// import DigitalMarketingLogo from '../images/digitalmarketing.png'
// import GraphicsDesigningLogo from '../images/graphic.png'







const Servicelists = () => {
  // const Lists = [
  //   {
  //     name: "Web Designing",
  //     img: webDesigningLogo,
  //     content: "We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.",
  //     color: "#696969"
  //   },
  //   {
  //     name: "Web Application",
  //     img: WebApplicationLogo,
  //     content: "We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.",
  //     color: "#696969"
  //   },
  //   {
  //     name: "Mobile App Development",
  //     img: MobileAppLogo,
  //     content: "We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.",
  //     color: "#696969"

  //   },
  //   {
  //     name: "Ecommerce Development",
  //     img: EcommerceLogo,
  //     content: "For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.",
  //     color: "#696969"
  //   },
  //   {
  //     name: "Digital Marketing",
  //     img: DigitalMarketingLogo,
  //     content: "We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.",
  //     color: "#696969"
  //   },
  //   {
  //     name: "Graphic Designing",
  //     img: GraphicsDesigningLogo,
  //     content: "We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth.",
  //     color: "#696969"
  //   },

  // ]
  return (
    <div className='servicelists-main-div'>

      {/* {Lists.map(item => {
        return (
          <div className='webdesigning-main-div'>
            <a className='card' href="https://woxro.com/Web-Designing">
              <div className='card-content' style={{ backgroundColor: item.color }}>
                <div>
                  <img className='webDesigningLogo' src={item.img} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                </div>
                <div className='webdesigning-content'>
                  <p>{item.content}</p>

                </div>
              </div>
            </a>
          </div>
        )
      })} */}

      <WebDesigning />
      <WebApplication />
      <MobileApp />
      <Ecommerce />
      <DigitalMarketing />
      <GraphicsDesigning />

    </div>

  )
}

export default Servicelists