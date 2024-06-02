import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import Gallery from './components/Gallery';
import NavHeader from './components/NavHeader';
import Home from './components/Home';
import Footer from './components/Footer';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';



function App() {

const images =[image1,image3,image4,image2
  
];

  return (
    <div>
        <NavHeader />
    <Routes>
      
    <Route path = '/' element = {<Home images = {images} interval={4000} text ="PICK A HAIR STYLE OF YOUR TEST" />}/>
    <Route path="/about" element= {<AboutPage image2 ={image2} text = "Why choose us
Annique Beauty Salon & Day Spa is housed in a beautiful old-world charming thatched building,
 surrounded by mature trees where birds chatter away. The decor is French colonial and makes one 
 feel totally relaxed and at home. With a fireplace in the lounge, one can relax before or after a treatment and 
 enjoy a fresh muffin, unique Annique Herbal Teas or Lifestyle Shake.
Annique Beauty Salon & Day Spa is unique in that it is the only registered Day Spa that may use and sell the
 world renowned Annique Health and Skincare products. We offer a variety of treatments, ranging from 
 Signature Facials, Rooibos Body Treatments and Day Spa Packages. State of the art Spa Facilities provide the privacy
  for our individual clients’ needs, assuring satisfaction and relaxation. Our qualified therapists are totally
   committed to our clients’ privacy, comfort and Spa experience.
"/>}/>






    <Route path = '/gallery' element = {<Gallery images={images} text = "LOW COST PRICE PICK A HAIR STYLE"/>}></Route>
          <Route path="/contact" element ={<ContactPage image1={image1} text="Tel: 012 654 0602|Cell and WhatsApp: 084 342 9630 |Email
bookings@anniquedayspa.co.za Business Hours Monday – Friday  08:00 – 18:00 Saturday  08:00 – 17:00
Specific Public Holidays 08:00 – 13:00"/>} />
        
          
      
    <Route path = '/services' element = {<ServicesPage image3 ={image3} text = "Haircuts  Hair Coloring Styling
     Extensions and more  Haircuts  Hair Coloring Styling Extension  Haircuts  Hair Coloring Styling Extension   
       and more  Haircuts  Hair Coloring Styling Extension  Haircuts  Hair Coloring Styling Extension"/>}></Route>




    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
