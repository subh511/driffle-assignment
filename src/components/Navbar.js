import "./Navbar.css";
import driffle from "./assets/driffle-logo.png";
import region from "./assets/region.png";  
import like from "./assets/like.png";
import profile from "./assets/profile.png";
import cart from "./assets/cart-notification.png";

function Navbar(){
    return(
        <div className='navbar'>
        <div className="navbar__left">
        <img src={driffle} alt="Logo" className="navbar__logo" />
        </div>
      <div className="navbar__right">
        <img src={region} alt="Logo1" className="navbar__region" />
        <img src={like} alt="Logo2" className="navbar__like" />
        <img src={cart} alt="Logo3" className="navbar__cart" />
        <img src={profile} alt="Logo3" className="navbar__profile" />
      </div>
        </div>
    )
}
export default Navbar;