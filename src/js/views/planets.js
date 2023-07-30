import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetail = () => {
  const { uid } = useParams();
  const [planet, setPlanet] = useState({});
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${uid}/`);
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlanet();

    if (uid === "1") {
      setImageUrl('https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg'); 
    } else {
      setImageUrl(`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`);
    }
  }, [uid]);

  return (
    planet && (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1>{planet.name}</h1>
            <img src={imageUrl} alt={planet.name} className="img-fluid mb-3 me-md-3" />
            <p className="mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in libero vitae massa fermentum
              eleifend. Nunc auctor tortor ut nibh pellentesque, vel pretium felis tempus. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Duis non ex eget velit luctus scelerisque.
              Fusce pellentesque massa ac semper sagittis. Phasellus semper, magna quis convallis finibus, risus ex
              pretium nisl, vel faucibus quam libero ac metus. Aliquam ac nibh eu augue sagittis gravida. Nullam
              euismod enim et nibh congue, vel euismod sapien cursus. Sed euismod augue sit amet mauris commodo, eu
              lobortis mauris convallis. Nulla facilisi. Proin commodo blandit tellus, quis tristique arcu posuere eu.
            </p>
            <p className="mb-1">
              <strong>Climate:</strong> {planet.climate}
            </p>
            <p className="mb-1">
              <strong>Diameter:</strong> {planet.diameter} km
            </p>
            <p className="mb-1">
              <strong>Gravity:</strong> {planet.gravity}
            </p>
            <p className="mb-1">
              <strong>Orbital Period:</strong> {planet.orbital_period} days
            </p>
            <p className="mb-1">
              <strong>Population:</strong> {planet.population}
            </p>
            <p className="mb-1">
              <strong>Rotation Period:</strong> {planet.rotation_period} hours
            </p>
            <p className="mb-1">
              <strong>Surface Water:</strong> {planet.surface_water}%
            </p>
            <p className="mb-1">
              <strong>Terrain:</strong> {planet.terrain}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default PlanetDetail;













