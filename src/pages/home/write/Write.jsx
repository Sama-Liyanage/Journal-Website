import React from 'react'
import "./write.css";
import writeImg from "../../../assets/writeImg.jpg"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={writeImg} alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-light fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell yourself story....." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
