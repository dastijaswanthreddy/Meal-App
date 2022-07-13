import React,{useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../context/context';
import './Categories.scss';

const Categories = () => {
  const {fetchCategories,categories}=useContext(myContext);
  useEffect(()=>{
    console.log(2);
      fetchCategories();
  },[fetchCategories]);
  return (
    <div className='categories'>
        {categories.map(category=>(
          <Link to={`/categories/${category.strCategory}`} key={category.idCategory}>
            <div key={category.idCategory}>
              <img src={category.strCategoryThumb} alt='#'/>
              <h3>{category.strCategory}</h3>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Categories;