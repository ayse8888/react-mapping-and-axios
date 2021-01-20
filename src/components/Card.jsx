import React from "react";
import './Card.css'


const Card = (props) => {
  const {name, username ,id} = props.card
  return(
    <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
        <p>
         <span className="text">Name</span> : {name}
        </p>
        <p>
         <span className="text">User Name</span> : {username}
        </p>
    </div>
  )
}

export default Card