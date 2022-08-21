import AOS from 'aos';
import React, {useState,useCallback,useContext} from 'react';
import { myContext } from '../context/context';
import './HomePage.scss';

const HomePage = () => {
  const [searchTerm,setSearchTerm]=useState("");
  const {fetchHomePageMeals,meals}=useContext(myContext);
  AOS.init({
    duration: 2000
  });

const fetchMealsHandler=useCallback(()=>{
    fetchHomePageMeals(searchTerm);
  },[searchTerm,fetchHomePageMeals]);

// const fetchMealsHandler=()=>{
//   fetchHomePageMeals(searchTerm);
// }

  return (
    <div className='home'>
        <div className='home-search'>
            <input 
              type='text' 
              placeholder='Type a meal name...' 
              value={searchTerm} 
              onChange={(e)=>setSearchTerm(e.target.value)}
             />
            <button onClick={fetchMealsHandler}>Search Meal</button>
        </div>
        <div className='home-grid'>
            {meals ? meals.map((meal) => (
              <div className='home-meal' key={meal.idMeal} data-aos="zoom-in">
                <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer"><img src={meal.strMealThumb} alt='#' /></a>
                <a href={meal.strSource} target="_blank" rel="noopener noreferrer"><h3>{meal.strMeal}</h3></a>
              </div>
            )) : <div className='home-meal' data-aos="zoom-in">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7D1F6AgHuvYGUUA7JHV1gKP3ut89dfb83yA&usqp=CAU" alt='#' />
                <h4>404</h4>
                <h2>No meals found! Try another meal...</h2>
              </div>}
        </div>
    </div>
  )
}

export default HomePage;