import React  from 'react';
import {NavLink, Link} from 'react-router-dom';

function Navbar (){


   
   return(
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
    
        <div className="logo">
          <h1><NavLink className="nav-link" to="/">AYODA</NavLink></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <NavLink to="index.html"><img src="assets/client-1.png" alt="" /></NavLink> */}
        </div>
    
        <nav id="navbar" className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`} to="/">AYODA
              </NavLink>
            </li>

            <li className="dropdown"><Link to="#" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`} ><span>About</span> <i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li className="nav-item"><NavLink to="#" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Drop Down 1</NavLink></li>
                
                <li className="nav-item"><NavLink to="#" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Drop Down 2</NavLink></li>
                <li className="nav-item">
                            <NavLink className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}  to='/blogs'>Blog</NavLink>
                </li>
                <li className="nav-item"><NavLink to="#" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Drop Down 3</NavLink></li>
                <li className="nav-item"><NavLink to="#" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Drop Down 4</NavLink></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink to="services.html" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Services</NavLink></li>
            <li className="nav-item"><NavLink to="portfolio.html" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Portfolio</NavLink></li>
            <li className="nav-item"><NavLink to="team.html" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Team</NavLink></li>
            <li className="nav-item"><NavLink to="pricing.html" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Pricing</NavLink></li>
            <li className="nav-item"><NavLink to="blog.html" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Blog</NavLink></li>


            <li className="dropdown"><Link to="#" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
              <ul className="nav-item">

                <li ><NavLink to="#" className={`nav-link ${({isActive,isPending})=>
                isPending?'pending':isActive ? 'active':'' }`}>Drop Down 1</NavLink></li>
                <li className="dropdown"><NavLink to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                  <ul>
                    <li ><NavLink to="#">Deep Drop Down 1</NavLink></li>
                    <li ><NavLink to="#">Deep Drop Down 2</NavLink></li>
                    <li ><NavLink to="#">Deep Drop Down 3</NavLink></li>
                    <li ><NavLink to="#">Deep Drop Down 4</NavLink></li>
                    <li ><NavLink to="#">Deep Drop Down 5</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item"><NavLink to="#">Drop Down 2</NavLink></li>
                <li className="nav-item">
                            <NavLink className="nav-link"  to='/blogs'>Blog</NavLink>
                </li>
                <li className="nav-item"><NavLink to="#">Drop Down 3</NavLink></li>
                <li className="nav-item"><NavLink to="#">Drop Down 4</NavLink></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink to="contact.html" >Contact</NavLink></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    
      </div>
    </header>  
      
   );
};
export default Navbar;