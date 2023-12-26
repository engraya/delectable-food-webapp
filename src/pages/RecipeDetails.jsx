import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from 'react-router-dom';
import ImageDownloader from '../components/ImageDownloader'

function RecipeDetails() {

    const [recipeDetails, setRecipeDetails] = useState({});
    const [activeRecipeTabSwitch, setActiveRecipeTabSwitch] = useState("instructions")

    const { name } = useParams();

    const fetchRecipeDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=ea225680f3474e89829b6e239e703c8d`)
        const recipeDetailData = await data.json();
        setRecipeDetails(recipeDetailData)
        console.log(recipeDetailData)
    } 

    useEffect(() => {
        fetchRecipeDetails();
    }, [name])


    const insructionsActiveHandler = () => {
        setActiveRecipeTabSwitch("instructions")
    }

    const ingredientsSctiveHandler = () => {
        setActiveRecipeTabSwitch("ingredients")
    }
  return (
    <div>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Link to='/'>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <GrFormPreviousLink />
            </button>
          </Link>
 
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={recipeDetails.image}
              alt="Recipe Image"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Product info */}
        {/* Product info */}

          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{recipeDetails.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight">Recipe</p>
      
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium ">Color</h3>
              </div>

              {/* Sizes */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Health Score</h3>
                  <a href="#" className="text-sm font-medium  hover:text-indigo-500">
                  {recipeDetails.healthScore}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Dairy Free</h3>
                  <a href="#" className="text-sm font-medium  hover:text-indigo-500">
                  {recipeDetails.dairyFree}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium ">Gluten Free</h3>
                  <a href="#" className="text-sm font-medium  hover:text-indigo-500">
                  {recipeDetails.glutenFree}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium ">Vegetarian</h3>
                  <a href="#" className="text-sm font-medium  hover:text-indigo-500">
                  {recipeDetails.vegetarian}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium ">Very Healthy</h3>
                  <a href="#" className="text-sm font-medium  hover:text-indigo-500">
                  {recipeDetails.veryHealthy}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Ready In Minutes</h3>
                  <a href="#" className="text-sm font-medium  hover:text-indigo-500">
                  {recipeDetails.readyInMinutes}
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Favourites
              </button>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Download Info
              </button>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className='mb-3 mx-3'> Download Image</span>
                <ImageDownloader imageUrl={recipeDetails.image} filename={recipeDetails.title}/>
              </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Summary</h3>

              <div className="space-y-6">
              <h3>Summary</h3>
                <p className="text-base"  dangerouslySetInnerHTML={{__html : recipeDetails.summary}}></p>
              </div>
            </div>

            <div>
              <h3 className="sr-only">Cooking Instructions</h3>

              <div className="space-y-6">
              <h3>Cooking Instructions</h3>
                <p className="text-base"  dangerouslySetInnerHTML={{__html : recipeDetails.instructions}}></p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium">Ingredients</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {recipeDetails.extendedIngredients?.map((ingredient) => (
                    <li key={ingredient.id} className="text-gray-400">
                      <span className="">{ingredient.original}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm 0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails


