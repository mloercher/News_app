import React from 'react'
import './article.css'

function Article({ title, description, url, urlToImage }) {
    return (
        <div className='news-app'>
            <div className='news-item'>
                <h2 className='art-title'>{title}</h2>
                <a href={url}><img className="news-img" src={urlToImage} alt={urlToImage}></img></a>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Article  