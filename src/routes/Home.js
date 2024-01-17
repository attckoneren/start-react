import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import styles from "./Home.module.css";
import load from "./Loading.module.css";
import Header from "../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {loading ? (
          <div className={load.loader}>
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
