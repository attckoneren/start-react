import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

const Movies = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>
            {title} ({year})
          </Link>
        </h2>
        <p className={styles.summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}
        </p>
        <ul className={styles.movie__genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
};

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movies;
