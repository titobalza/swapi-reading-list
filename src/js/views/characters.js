import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetail = () => {
    const { uid } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/people/${uid}/`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCharacter();
    }, [uid]);

    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>{character.name}</h1>
					<img src={imageUrl} alt={character.name} className="img-fluid mb-3 me-md-3 	" />
                        <p className="mb-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in libero vitae massa fermentum eleifend. Nunc auctor tortor ut nibh pellentesque, vel pretium felis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis non ex eget velit luctus scelerisque. Fusce pellentesque massa ac semper sagittis. Phasellus semper, magna quis convallis finibus, risus ex pretium nisl, vel faucibus quam libero ac metus. Aliquam ac nibh eu augue sagittis gravida. Nullam euismod enim et nibh congue, vel euismod sapien cursus. Sed euismod augue sit amet mauris commodo, eu lobortis mauris convallis. Nulla facilisi. Proin commodo blandit tellus, quis tristique arcu posuere eu.
                        </p>
                    <p className="mb-1"><strong>Height:</strong> {character.height} cm</p>
                    <p className="mb-1"><strong>Weight:</strong> {character.mass} kg</p>
					<p className="mb-1"><strong>Gender:</strong> {character.gender} </p>
                    <p className="mb-1"><strong>Birth Year:</strong> {character.birth_year} </p>
					<p className="mb-1"><strong>Skin Color:</strong> {character.skin_color} </p>
                    <p className="mb-1"><strong>Eye Color:</strong> {character.eye_color} </p>
					<p className="mb-1"><strong>Hair Color:</strong> {character.hair_color} </p>
                </div>
            </div>
        </div>
    );
};
export default CharacterDetail