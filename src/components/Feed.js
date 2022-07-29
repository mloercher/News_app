import React, {useState, useEffect} from 'react'
import axios from 'axios';
const api_key = process.env.REACT_APP_API_KEY


function Feed() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=football&apiKey=${api_key}`)
      console.log(response)
      setArticles(response.data.articles)
    }
    getArticles()
  }, [])

  
  return (
    <div className='main'>
      

    </div>
  )
}

export default Feed;