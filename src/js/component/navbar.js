import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import withoutFavorites from "../../img/Broken-Heart-PNG-Transparent.png";
import logo from "../../img/png-clipart-yoda-star-wars-logo-star-wars-text-star-wars-episode-vii.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-black">
      <Link to="/">
        <img src={logo} alt="Your logo" width="200px" />
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle me-5"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{store.favorites.length > 0 && `: ${store.favorites.length}`}
          </button>
          <ul className="dropdown-menu bg-light ">
            {store.favorites.length > 0 ? (
              store.favorites.map((favorite) => {
                return (
                  <li
                    key={favorite.id}
                    onClick={() =>
                      actions.removeFavorites(favorite.id, favorite.type)
                    }
                    className="d-flex align-items-center bg-light"
                  >
                    <a className="dropdown-item">{favorite.name}</a>
                    <i className="fas fa-trash-alt me-2 bg-light"></i>
                  </li>
                );
              })
            ) : (
              <li  className='bg-light' style={{ width: "100%", textAlign: "center" }}>
                <div
                  style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
				  className='bg-light'
                >
                  <img src={withoutFavorites}
				  className='bg-light'
				   alt="whitout favorites" width="30px" />
                  <span className='bg-light'>Without favorite</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};