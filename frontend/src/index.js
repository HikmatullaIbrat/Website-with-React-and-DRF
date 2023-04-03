import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
import './assets/vendor/animate.css/animate.css'
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.css'
// import './assets/vendor/boxicons/fonts/boxicons.js'
// import './assets/vendor/glightbox/js/glightbox.min.js'
// import './assets/vendor/isotope-layout/isotope.pkgd.min.js'
// import './assets/vendor/purecounter/purecounter_vanilla.js'
import './assets/vendor/swiper/swiper-bundle.min.css'
// import './assets/vendor/swiper/swiper-bundle.min.js'
import 'swiper/react'
import 'swiper/css'

// import "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(

  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )