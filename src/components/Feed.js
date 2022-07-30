import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Article from './Article';
const api_key = process.env.REACT_APP_API_KEY


function Feed() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=football&apiKey=${api_key}`).catch((error) => console.log(error))
      console.log(response)
      setArticles(response.data.articles)
    }
    getArticles()
  }, [])

  
  return (
    <div>
      {articles.map(newsItem => {
        return (
          <Article 
          title={newsItem.title}
          description={newsItem.description}
          url={newsItem.url}
          urlToImage={newsItem.urlToImage}
          />
        )
      })}
    </div>
  )
}

export default Feed;