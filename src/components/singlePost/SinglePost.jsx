import React from 'react'
import "./singlePost.css";
import singlePostImg from "../../assets/singlePostImg.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={singlePostImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>    
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Samadhi Nilakshana</b></span>
          <span className="singlePostDate">1 hour ago</span>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur architecto, reiciendis numquam, inventore aut itaque
            dolores commodi nihil porro laborum illum dolor, non culpa
            dolorum voluptatum ad at excepturi odio. Lorem ipsum dolor 
            sit amet, consectetur adipisicing elit. Deserunt quo modi 
            asperiores, libero molestias ipsum recusandae possimus quos, 
            iusto incidunt tenetur illo perferendis, similique qui 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur architecto, reiciendis numquam, inventore aut itaque
            dolores commodi nihil porro laborum illum dolor, non culpa
            dolorum voluptatum ad at excepturi odio. Lorem ipsum dolor 
            sit amet, consectetur adipisicing elit. Deserunt quo modi 
            asperiores, libero molestias ipsum recusandae possimus quos, 
            iusto incidunt tenetur illo perferendis, similique qui
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur architecto, reiciendis numquam, inventore aut itaque
            dolores commodi nihil porro laborum illum dolor, non culpa
            dolorum voluptatum ad at excepturi odio. Lorem ipsum dolor 
            sit amet, consectetur adipisicing elit. Deserunt quo modi 
            asperiores, libero molestias ipsum recusandae possimus quos, 
            iusto incidunt tenetur illo perferendis, similique qui  
             </p>
        </div>
      </div>
    </div>
  )
}
