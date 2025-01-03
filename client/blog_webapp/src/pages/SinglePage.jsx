import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const SinglePage = () => {
  return (
    <div className='single'>
      <div className="content">
      <img src="https://images.pexels.com/photos/13268478/pexels-photo-13268478.jpeg"></img>
      <div className="user">
        <img src="https://images.pexels.com/photos/13268478/pexels-photo-13268478.jpeg"></img>
        <div className="info">
          <span>Nids</span>
          <p>posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt=""/>
          </Link>  
          <img src={Delete} alt=""/>
        </div>
      </div>
      <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
      <div className="menu">
       <Menu/>
        </div>
    </div>
  )
}

export default SinglePage