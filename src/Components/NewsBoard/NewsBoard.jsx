import "./NewsBoard.css";

import { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import axios from "axios";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const dataShow = useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=aed20dd2f66244a4bef4592b6b43614d`;
    axios.get(url).then((res) => setArticles(res.data.articles));
  }, [category]);

  return (
    <div className="pb-3">
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="container">
        <div className="row gy-4">
          {articles.map((news, i) => {
            return (
              <NewsItem
                key={i}
                title={news.title}
                url={news.url}
                description={news.description}
                src={news.urlToImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsBoard;
