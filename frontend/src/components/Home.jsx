import React from 'react';
import { Link } from 'react-router-dom';


import image_1 from '../assets/img/slide/slide-1.jpg';
import image_2 from '../assets/img/slide/slide-2.jpg';
import image_3 from '../assets/img/slide/slide-3.jpg';


import first_client from '../assets/img/clients/client-1.png';
import second_client from '../assets/img/clients/client-2.png';

function Home () {

    
return(
  <div>
  <section id="hero">
 <div className="hero-container">
   <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

     <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

     <div className="carousel-inner" role="listbox">

      
       

     
       <div className="carousel-item"  style={{backgroundImage:`url(${image_2})`}}>
         <div className="carousel-container">
           <div className="carousel-content">
             <h2 className="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
             <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
             <Link to="" className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
           </div>
         </div>
       </div>
       <div className="carousel-item active" style={{backgroundImage:`url(${image_1})`}}>
         <div className="carousel-container">
           <div className="carousel-content">
             <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Eterna</span></h2>
             <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
             <Link to=""  className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
           </div>
         </div>
       </div>

     
       <div className="carousel-item " style={{backgroundImage:`url(${image_3})`}}>
         <div className="carousel-container">
           <div className="carousel-content">
             <h2 className="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
             <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
             <Link to="" className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
           </div>
         </div>
       </div>

     </div>

     <Link className="carousel-control-prev" to="#heroCarousel" role="button" data-bs-slide="prev">
       <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
     </Link>

     <Link className="carousel-control-next" to="#heroCarousel" role="button" data-bs-slide="next">
       <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
     </Link>

   </div>
 </div>
</section>

<main id="main">

{/* <!-- ======= Featured Section ======= --> */}
<section id="featured" className="featured">
<div className="container">

<div className="row">
 <div className="col-lg-4">
   <div className="icon-box">
     <i className="bi bi-card-checklist"></i>
     <h3><Link to="">Lorem Ipsum</Link></h3>
     <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
   </div>
 </div>
 <div className="col-lg-4 mt-4 mt-lg-0">
   <div className="icon-box">
     <i className="bi bi-bar-chart"></i>
     <h3><Link to="">Dolor Sitema</Link></h3>
     <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
   </div>
 </div>
 <div className="col-lg-4 mt-4 mt-lg-0">
   <div className="icon-box">
     <i className="bi bi-binoculars"></i>
     <h3><Link to="">Sed ut perspiciatis</Link></h3>
     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
   </div>
 </div>
</div>

</div>
</section>
{/* <!-- End Featured Section --> */}

{/* <!-- ======= About Section ======= --> */}
<section id="about" className="about">
<div className="container">

<div className="row">
 <div className="col-lg-6">
   <img src="assets/img/about.jpg" className="img-fluid" alt="" />
 </div>
 <div className="col-lg-6 pt-4 pt-lg-0 content">
   <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
   <p className="fst-italic">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
     magna aliqua.
   </p>
   <ul>
     <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
     <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
     <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
   </ul>
   <p>
     Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum
   </p>
 </div>
</div>

</div>
</section>
{/* <!-- End About Section --> */}

{/* <!-- ======= Services Section ======= --> */}
<section id="services" className="services">
<div className="container">

<div className="row">
 <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
   <div className="icon-box">
     <div className="icon"><i className="bx bxl-dribbble"></i></div>
     <h4><Link to="">Lorem Ipsum</Link></h4>
     <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
   </div>
 </div>

 <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
   <div className="icon-box">
     <div className="icon"><i className="bx bx-file"></i></div>
     <h4><Link to="">Sed ut perspiciatis</Link></h4>
     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
   </div>
 </div>

 <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
   <div className="icon-box">
     <div className="icon"><i className="bx bx-tachometer"></i></div>
     <h4><Link to="">Magni Dolores</Link></h4>
     <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
   </div>
 </div>

 <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
   <div className="icon-box">
     <div className="icon"><i className="bx bx-world"></i></div>
     <h4><Link to="">Nemo Enim</Link></h4>
     <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
   </div>
 </div>

 <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
   <div className="icon-box">
     <div className="icon"><i className="bx bx-slideshow"></i></div>
     <h4><Link to="">Dele cardo</Link></h4>
     <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
   </div>
 </div>

 <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
   <div className="icon-box">
     <div className="icon"><i className="bx bx-arch"></i></div>
     <h4><Link to="">Divera don</Link></h4>
     <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
   </div>
 </div>

</div>

</div>
</section>
{/* <!-- End Services Section --> */}

{/* <!-- ======= Clients Section ======= --> */}
<section id="clients" className="clients">
<div className="container">

<div className="section-title">
 <h2>Clients</h2>
 <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
</div>

<div className="clients-slider swiper">
 <div className="swiper-wrapper align-items-center">
   <div className="swiper-slide"><img src={first_client} className="img-fluid" alt="" /></div>
   <div className="swiper-slide"><img src={second_client} className="img-fluid" alt="" /></div>
   <div className="swiper-slide"><img src="../assets/clients/client-3.png" className="img-fluid" alt="" /></div>
   <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
   <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
   <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
   <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
   <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
 </div>
 <div className="swiper-pagination"></div>
</div>

</div>
</section>
{/* <!-- End Clients Section --> */}

</main>
{/* <!-- End #main --> */}

</div>
);
   
};

export default Home;