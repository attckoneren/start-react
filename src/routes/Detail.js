import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetail from "../components/MovieDetail";
import load from "./Loading.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={load.loader}>
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      ) : (
        <div>
          <MovieDetail
            key={movie.id}
            coverImg={movie.large_cover_image}
            title={movie.title_long}
            rating={movie.rating}
            runtime={movie.runtime}
            description={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
