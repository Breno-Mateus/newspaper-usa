import { useEffect, useState } from "react"
import Header  from "../components/header"
import {data} from "../service/api"
import { Article } from "../types/article"
import CardNews from "../components/news"
import { Divmain, DivNews, DivNewsFirst } from "./style"
import BoxMain from "../components/boxmain"
import Footer from "../components/footer"


function App() {
  
  console.log('API Key in production:', import.meta.env.VITE_API_KEY)

  //define o news como uma lista de "Article"
  const [news, setNews] = useState<Article[]>([])

  useEffect(() => {  

    data()

    .then(response => {
      console.log(response.data.articles)

      setNews(response.data.articles)
    })

    .catch(error => {
      console.log(error.message)
    })

  }, [])

  const filteredArticles = news.filter(article => article.urlToImage);

  // Pegue as duas primeiras notícias
  const firstTwoArticles = filteredArticles.slice(0, 2);

  // Pegue o restante das notícias
  const remainingArticles = filteredArticles.slice(2);

  return (
    <>
    <Header />

    <Divmain>

      <DivNewsFirst>
        {firstTwoArticles.map((article, index) => (
            <BoxMain key={index} urlImage={article.urlToImage} title={article.title} newspaper={article.source.name} url={article.url}/>
        ))}
      </DivNewsFirst>
      

      <DivNews>
        {remainingArticles.map((article, index) => (
            <CardNews key={index} url={article.url} description={article.description} title={article.title} urlImage={article.urlToImage} newspaper={article.source.name}/>
        ))}
      </DivNews>
    </Divmain>

    <Footer />
    </>
  )
}

export default App
