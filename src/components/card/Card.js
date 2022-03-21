import React from 'react'
import "./card.css"

export const Card = ({user}) => {
  return (
      <div className="col-md-6 col-lg-3 py-3">
      <div className="card" >
      <img src={user.picture.large} className="card-img-top" alt="Card image cap"/>
      <div className="card-body">
      <h5 className="card-title">
      {user.name.title} {user.name.first} {user.name.last}
      </h5>
      <p className="card-text">
        <ul className='list-unstyled'>
          <li><i class="fa-solid fa-phone"></i>Phone: {user.cell}</li>
          <li><i class="fa-solid fa-envelope"></i>Email: {user.email}</li>
          <li><i class="fa-solid fa-location-dot"></i>Address: {user.location.country}</li>
        </ul>
        </p>
    </div>
  </div>
  </div>
    
  )
}
