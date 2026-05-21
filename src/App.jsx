import { useState } from 'react'
import axios from 'axios'
// import './App.css'
const URL = 'https://www.themealdb.com/api/json/v1/1/random.php'
function App() {
    const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMeal = async () => {
    setLoading(true);
    try{
        const response = await axios.get(URL);
        console.log(response);
        setMeal(response.data);

    }catch(err){
        setError(err.message)
    }finally{
        setLoading(false)
    }
  }

  return (
    <>
    {meal && <p>{meal.meals[0].strMeal}</p>}
    <button onClick={fetchMeal}>Meal </button>
    </>
  )
}

export default App
