import React,{createContext,useCallback,useState} from "react";
import axios from "axios";
export const myContext=createContext();

export const AppContext=({children})=>{
    const [meals,setMeals]=useState([]);
    const [categories,setCategories]=useState([]);
    const [random,setRandom]=useState([]);
    const [categoryDetails,setCategoriesDetails]=useState([]);
    const fetchHomePageMeals=useCallback((searchTerm)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res=>{
            // console.log(res.data.meals);
            setMeals(res.data.meals);
        })
    },[]);
    // const fetchHomePageMeals=(searchTerm)=>{
    //     axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    //     .then(res=>{
    //         console.log(res.data.meals);
    //         setMeals(res.data.meals);
    //     })
    // };

    const fetchCategories=useCallback(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then((res)=>{
            // console.log(res.data.categories);
            setCategories(res.data.categories);
        })
    },[]);

    const fetchCategoriesDetails=useCallback((category)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res=>{
            // console.log(res.data.meals);
            setCategoriesDetails(res.data.meals)
        })
    },[]);

    const fetchRandomMeal=useCallback(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res)=>{
            console.log(res.data.meals);
            setRandom(res.data.meals);
        })
    },[]);
    return (
        <myContext.Provider value={{fetchHomePageMeals,meals,fetchCategories,categories,fetchRandomMeal,random,fetchCategoriesDetails,categoryDetails}}>{children}</myContext.Provider>
    )
}