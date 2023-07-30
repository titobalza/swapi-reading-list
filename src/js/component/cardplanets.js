import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext.js';

function CardPlanets(props) {
  const { store, actions } = useContext(Context);
  let uid = props.planetas.uid;
  let imageUrl;
  let name = props.planetas.name
  if (name === "Tatooine") {
    imageUrl = 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg'; 
  } else {
    imageUrl = `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;
  }
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    const isLiked = store.favorites.some((favorite) => favorite.id === uid && favorite.type === 'person');
    if (isLiked) {
      
      actions.removeFavorites(uid, 'person');
    } else {
      
      actions.addFavorites(uid, name, 'person');
    }
    setLiked(!isLiked);
  };

  return (
    <div className="card mb-3 me-4 relleno" style={{minWidth: "300px"}}>
      <div className="card-body text-start" style={{width:"18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body d-flex justify-content-between " >
          <h5 className="card-title me-3">{name}</h5>
          <p className="card-text"></p>
          <Link to={"/planets/"+uid} className="btn btn-sm btn-primary " style={{ width: "4rem", height:'3rem'}}>Details</Link>
          <button type="button" className={`btn mb-1 btn-sm btn-outline-danger${liked ? ' active' : ''}`} onClick={handleLike} style={{ width: "4rem", height:'3rem'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
          </svg>
          {liked ? ' Liked' : ' Like'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPlanets