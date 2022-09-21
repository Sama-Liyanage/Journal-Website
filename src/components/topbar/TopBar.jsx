import "./topbar.css";
import { Link } from "react-router-dom";
import profileImage from "../../assets/profileImage.jpg"

//rfc
export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-solid fa-envelope-circle-check"></i>
            </div>

            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (
                        <img className="topImg" src={profileImage}></img>

                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link></li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link></li>
                        </ul>

                    )
                }

                <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
