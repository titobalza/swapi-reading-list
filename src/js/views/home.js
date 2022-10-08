import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "./../store/appContext.js";


export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=> {
		actions.getPeople ()

	},[])
	return (
		<div className="" >
			{store.people.map((person)=>{
				return (
					<Card person={person}
					key={person.uid}
					/>
					
				)
			})}
		</div>
	)}