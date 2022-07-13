import React,{useEffect,useContext} from 'react';
import { myContext } from '../context/context';
import './RandomMeal.scss';

const RandomMeal = () => {
  const {fetchRandomMeal,random}=useContext(myContext);
  useEffect(()=>{
      fetchRandomMeal();
  },[fetchRandomMeal]);
  return (
    <div className='random'>
        {
          random.map(meal=>(
            <div key={meal.idMeal} className='random-grid'>
              <div className='random-grid-controls'>
                  <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer"><img src={meal.strMealThumb} alt='#'/></a>
                  <a href={meal.strSource} target="_blank" rel="noopener noreferrer"><h2>{meal.strMeal}</h2></a>
                  <button onClick={fetchRandomMeal}>Generate Another Meal</button>
              </div>
              <div className='random-grid-instructions'>
                <h3>Instructions</h3>
                <p>{meal.strInstructions}</p>
              </div>
          </div>
          )) 
        }
    </div>
  )
}

export default RandomMeal;