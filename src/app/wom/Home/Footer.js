import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
      <div className='footer'>
      <div className='bulb'>
          <div className='pic'>
              {/* <img src="bulb.png" alt="" /> */}
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/car-engine-9931125-8092871.png?f=webp" alt="" />
              <h1 style={{marginLeft:'90px'}}> Knowledge Grow Your Influence</h1>
          </div>
          <div className='footer-text'>
              <p style={{marginLeft:'40px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quaerat in error, pariatur optio dolorum corporis dolore maiores suscipit. Quam.</p>
              <NavLink to="/" style={{marginLeft:'40px'}}>Get Started</NavLink>
          </div>
      </div>
      <div className='newsletter'>
          <div className='news-left'>
              <h4>Subscribe</h4>
              <h1>Subscribe To Get Latest <br />Update From Us</h1>
              <span className='curve'><img src="curve.png" alt="" /></span>
          </div>
          <div className='news-right'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo exercitationem quis consequuntur voluptas nihil.</p>
              <form action="">
                  <input type="email" name='email' />
                  <button>Subscribe</button>
              </form>
          </div>
      </div>
      <div className='footer-menu'>
          <h1>TXN</h1>
          <ul className='footer-inner-nav'>
              {/* <li><a href="#hub">Hub</a></li>
              <li><a href="#mint">Mint</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#socials">Socials</a></li> */}
              <li><NavLink to=" "> <img style={{width:"200px"}} src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" /></NavLink></li>
              <li><NavLink to=" "> <img style={{width:"180px", height:'52px'}} src="https://www.incometax.gov.in/iec/foportal/sites/default/files/2020-02/app-store.png" alt="" /></NavLink></li>
             
          </ul>
      </div>
      <hr />
      <div>
          <p className='text-center'>&#169; Copyright 2024| All Right Reserved |</p>
      </div>
  </div>
    );
  }
  