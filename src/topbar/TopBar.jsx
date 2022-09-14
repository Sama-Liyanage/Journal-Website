import "./topbar.css";
import profileImage from "../assets/profileImage.jpg"

//rfc
export default function TopBar() {
  return (
    <div className="top">
        <div className='topLeft'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-solid fa-envelope-circle-check"></i>
        </div>

        <div className='topCenter'>
            <ul className="toplist">
                <li className="topListItem">Home</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img src={profileImage}></img>
        </div>
    </div>
  )
}
