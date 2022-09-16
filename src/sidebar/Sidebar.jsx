import React from 'react'
import "./sidebar.css";
import aboutMe from "../assets/aboutMe.jpg"

export default function sideBar() {
  return (
    <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>

                <img src={aboutMe} alt="" />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                   Quis perferendis quos animi velit iste unde provident eaque.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem ">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-solid fa-envelope-circle-check"></i>

            </div>

            </div>
    </div>
  )
}
