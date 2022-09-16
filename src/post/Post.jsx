import React from 'react'
import "./post.css";
import postImg from "../assets/postImg.jpg"

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src={postImg} alt="" />
    <div className="postInfo">
      <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
      </div>
      <span className="postTitle">
          Lorem ipsum dolor, sit amet consectetur
      </span>
      <hr/>
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Expedita, sunt! Laudantium 
        dolore ex commodi. Nisi voluptatum quasi commodi
        inventore ab, omnis, nemo expedita soluta maxime totam
        similique, cupiditate minima fugit.Lorem, ipsum dolor 
        sit amet consectetur adipisicing elit. Fugiat rerum,
        est omnis eligendi laboriosam consequatur! Illum laborum
        minus error repudiandae dicta ut laboriosam obcaecati
        amet! Molestias obcaecati quaerat porro reprehenderit?
       </p>
</div>
  )
}
