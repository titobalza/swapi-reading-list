import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="card" style={{width:"18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.person.name}</h5>
            <p className="card-text"></p>
            <Link to={"/character/"+props.person.uid} className="btn btn-primary">Go somewhere</Link>
        </div>
    </div>
  )
}

export default Card
