import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Navbar } from './components/Navbar/Navbar'
function App() {
  const [data, setData] = useState([])
  useEffect(
    () => async () => {
      const response = await axios.get(
        'https://techcrunch.com/wp-json/wp/v2/posts?per_page=10',
      )
      setData(response.data)
    },
    [],
  )
  return (
    <div className="App">
      <Navbar />
      <div className="inner_container">
        <p className="heading">List of News Articles</p>
        {data.map((item) => {
          const splitedDate = item.date.split('T')
          const excerpt = item.excerpt.rendered
            .replace('<p>', '')
            .replace('</p>', '')
          return (
            <div className="article_list_container">
              <div className="article_list_item">
                <p className="headline">
                  <span>Headline</span>: {item.parsely.meta.headline}
                </p>
                <p className="title">
                  <span>Title</span>:{item.title.rendered}
                </p>
                <div className="author_date_div">
                  <p className="author">
                    <span>Author</span>:
                    {item.parsely.meta.author.map((Item) => Item.name)}
                  </p>
                  <h1 className="date">
                    <span>Date</span>: {splitedDate[0]}
                  </h1>
                </div>

                <p className="experpt">
                  <span>Excerpt</span>:{excerpt}
                </p>
                <p>featured_media: {item.excerpt.featured_media}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
