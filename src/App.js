import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    //  let data = async () => {
    //    let response = await axios.get(
    //      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d3408808d49d462a99f21e8472eb00cc"
    //    );
    //    console.log(response.data.articles);
    //    setNews(response.data.articles);
    //  };
    //  data();
    fetchNews();
  }, []);

  let fetchNews = async () => {
    let response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d3408808d49d462a99f21e8472eb00cc"
    );
    console.log(response.data.articles);
    setNews(response.data.articles);
  };

  return (
    <React.Fragment>
      <header className="head">
        <h1>News Articles</h1>
        <div>
          <button onClick={fetchNews} className="btn btn-outline-danger btn-sm">
            Fetch news
          </button>
        </div>
      </header>

      <article>
        <div className="container">
          <div className="row">
            {news.map((value) => {
              return (
                <div className="col-12 my-3" key={value.id}>
                  <div className="card text-center">
                    <img
                      src={value.urlToImage}
                      className="card-img-top"
                      alt="/"
                    />
                    <div className="card-header border-0 bg-info">
                      <h2 className="card-title">{value.title}</h2>{" "}
                    </div>
                    <div className="card-body">
                      <h4 className="card-text">{value.content}</h4>
                      <p className="card-text">{value.description}</p>
                      <a
                        className="btn btn-info"
                        href={value.url}
                        role="button"
                      >
                        Read more
                      </a>
                      <div className="my-2">
                        {" "}
                        <p className="card-text fw-bolder">
                          {" "}
                          {value.author} ,{" "}
                          <small className="text-muted">
                            {value.publishedAt}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default App;
