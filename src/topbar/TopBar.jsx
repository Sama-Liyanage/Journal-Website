import "./topbar.css";
import profileImage from "../assets/profileImage.jpg"

//rfc
export default function TopBar() {
  return (
    <div className="top">
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-solid fa-envelope-circle-check"></i>
        </div>

        <div className='topCenter'>
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className="topImg" src={profileImage}></img>
            <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
