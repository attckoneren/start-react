import PropTypes from "prop-types";
import styles from "./Detail.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
const movieDetail = ({
  coverImg,
  title,
  rating,
  runtime,
  description,
  genres,
}) => {
  return (
    <div className={styles.detail}>
      <img src={coverImg} className={styles.detail__img} />
      <h1>{title}</h1>
      <div className={styles.detail__tmRa}>
        <div>
          <FontAwesomeIcon className={styles.detail__star} icon={faStar} />
          {rating}/10{" "}
        </div>
        <div>
          <FontAwesomeIcon className={styles.detail__clock} icon={faClock} />
          {runtime} mins
        </div>
      </div>
      <p>{description}</p>
      <ul className={styles.detail__genres}>
        {genres && genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
    </div>
  );
};
movieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default movieDetail;
