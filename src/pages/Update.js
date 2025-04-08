import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import supabase from "../config/supabaseClient"

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {

    // confirm that all fields were filled
    // update supabase table whose id matches id received from useParam
    // Form Error - setFormError('Please fill in all the fields correctly.')
    // navigate back to '/' after setting data
  }

  useEffect(() => {
    // create fetchSmoothie function to fetch smoothies that matches id gotten from useParams
    // if error - navigate to '/' and replace route history to '/'
    // set title. method and rating so it gets displayed on the page
    // "id" and "navigate" were used as the dependencies. FIND OUT WHY
    // it will return error if the id is not found ...
    // On error, navigate back to '/' and replace
  }, [])

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea 
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input 
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Update Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Update