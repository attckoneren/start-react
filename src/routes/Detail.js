import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetail from "../components/MovieDetail";

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
        <h1>Loading...</h1>
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
