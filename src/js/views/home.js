import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "./../store/appContext.js";
import CardPlanets from "../component/cardplanets";


export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=> {
		actions.getPeople ()
		actions.getPlanets ()
	},[])
	return (
	<div className="body">
	<h3 className="text-start mb-5 mt-3  body" style={{color:'red'}}>
	Characters
		<div className="d-flex me-2 mb-2 overflow-auto mt-3" >
			{store.people.map((person)=>{
				return (
					
					<Card person={person}
					key={person.uid}
					/>		
					
				)
			})}
		</div>
	</h3>
	<h3 className="text-start mb-5  body"  style={{color:'red'}}>
		Planets
	<div className="d-flex me-2 mb-2 overflow-auto mt-3" >
	{store.planets.map((planetas)=>{
			return (
				
				<CardPlanets planetas={planetas}
				key={planetas.uid}
				/>		
				
			)
		})}
	</div>
	</h3>
	</div>
	)}