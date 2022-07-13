import React,{useEffect, useContext} from 'react';
import { myContext } from '../context/context';
import './CategoriesDetails.scss';
const CategoriesDetails = () => {
  const {fetchCategoriesDetails,categoryDetails}=useContext(myContext);
  var location=window.location.pathname.substring(12);
  useEffect(()=>{
      fetchCategoriesDetails(location);
  },[fetchCategoriesDetails,location]);
  return (
    <div className='category-details'>
        {
            categoryDetails.map((meal)=>(
                <div key={meal.idMeal}>
                    <img src={meal.strMealThumb} alt='#'/>
                    <h4>{meal.strMeal}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default CategoriesDetails;