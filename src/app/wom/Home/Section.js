import { NavLink } from "react-router-dom";

export default function Section() {
    return (
      <div className='section'>
        <div className='inner-section'>
            <div className='section-text'>
                <h5>For Riders</h5>
                <h1>Mechkartz: Auto Spare Parts & Accessories</h1>
                <p>A car always kept maintained with superior quality, all high strength spare parts are quite sure to give you well pleasure on the road. Getting the best, as well affordable and high-performance based spare parts are very much helpful in keeping your vehicle in a good and spanking new condition for longer times.</p>
                <div className='button'><NavLink to="/">Explore Now</NavLink></div>
            </div>
            <div className='section-image'>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-e9f5f3f8d595aec4ea0ea1775aa862af" style={{height:"350px", opacity:'0.8', borderRadius:'80px', paddingTop:'25px', paddingBottom:'25px'}} alt="" />
            </div>
        </div>
        <div className='card-section'>
            <div className='cards'>
                <div className='card'>
                    <img src="globe.png" alt="" />
                    <h1>Genuine Products</h1>
                    <p>Ensuring Safety and Reliability.</p>
                    <NavLink to="/">learn &rarr;</NavLink>
                </div>
                <div className='card'>
                    <img src="2.png" alt="" />
                    <h1>Enquire Online at</h1>
                    <p>your Convenience.</p>
                    <NavLink to="/">learn &rarr;</NavLink>
                </div>
                <div className='card'>
                    <img src="3.png" alt="" />
                    <h1>Fulfillment through</h1>
                    <p>Our Wide Network</p>
                    <NavLink to="/">learn &rarr;</NavLink>
                </div>
                <div className='card'>
                    <img src="https://toppng.com/uploads/preview/auto-parts-icon-11562990631xx98fcl9mq.png" alt="" />
                    <h1>Ensures Superior</h1>
                    <p>Vehicle Performance</p>
                    <NavLink to="/">learn &rarr;</NavLink>
                </div>
            </div>
        </div>
    </div>
    );
  }
  