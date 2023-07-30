const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople : async () => {
				try{
					const response = await fetch(
						"https://www.swapi.tech/api/people/"
					)
					const peopleBody  = await response.json()
					console.log(peopleBody)
					const store = getStore (

					)
					setStore (
						{people:peopleBody.results}
					)
				}
				catch(error){
					console.log(error)
				}
			},
			getPlanets : async () => {
				try{
					const response = await fetch(
						"https://www.swapi.tech/api/planets/"
					)
					const planetsBody  = await response.json()
					console.log(planetsBody)
					const store = getStore (

					)
					setStore (
						{planets:planetsBody.results}
					)
				}
				catch(error){
					console.log(error)
				}
			},
			addFavorites: (id, name, type) => {
				const store = getStore()
				const filteredFavorites = store.favorites.filter((favorite) => favorite.id !== id)
				if(store.favorites.length == filteredFavorites.length){
					setStore({favorites: [...store.favorites, {id, name, type}]})
				}else{
					setStore({favorites: filteredFavorites})
				}
			},
			removeFavorites: (id, type) => {
				const store = getStore()
				const newFavorites = store.favorites.filter(favorite => favorite['id']!==id)
				setStore({favorites: newFavorites})
			},
			isFavorite: (id, type) => {
				const store = getStore();
				let isFavorite = false;
				store.favorites.map(favorite => {
				  if (favorite.type === type && favorite.id === id) {
					isFavorite = true;
				  }
				});
				return isFavorite;
			  },
				

		}
	};
};

export default getState;
