import { NavLink } from "react-router-dom";

export default function Content() {
    return (
      <div>
      <div className='container'>
          <div className='text'>
              <h3>Car Engine</h3>
              <h1>Most Searched on TiT</h1>
              <p style={{textAlign:'justify'}}>We offer the best rates for car spare parts and provide a complete range of spare parts. Along with spare parts we have an exclusive range of car accessories. If you are looking for car accessories online then we are the one-stop shop for you. At Motrparts, we check every spare part and make sure that you receive the original and best quality spare parts. All the spare parts go under quality tests so that our end user gets the best spare parts online</p>
              <div className='button'><NavLink to="/">Explore Now &#8599;</NavLink></div>
          </div>
          <div className='image'>
              {/* <img src="crypto1.png" alt="" /> */}
             
              <img style={{marginLeft:"30px"}} src="https://preview.free3d.com/img/2017/01/2399362966198682987/vf4vjkf5.jpg" alt="" />
            
          </div>
      </div>
      <div className='partners'>
          {/* <span><img src="webflow.png" alt="" /></span>
          <span><img src="mparticle.png" alt="" /></span>
          <span><img src="chargebee.png" alt="" /></span>
          <span><img src="corsair.svg" alt="" /></span> */}
          {/* <span><img src="emachines.png" alt="" /></span> */}
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/Hyundai-Logo.png" alt="" /></span>
          <span><img   src="https://logohistory.net/wp-content/uploads/2023/01/Audi-Symbol-1536x864.png" alt="" /></span>
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/Jaguar-Logo-2001-1536x864.png" alt="" /></span>
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/BMW-Emblem-1536x864.png" alt="" /></span>
          <span><img src="https://logohistory.net/wp-content/uploads/2023/01/Ford-Emblem-1536x864.png" alt="" /></span>
      </div>
  </div>
    );
  }
  