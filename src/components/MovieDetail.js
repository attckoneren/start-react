import PropTypes from "prop-types";

const movieDetail = ({
  coverImg,
  title,
  rating,
  runtime,
  description,
  genres,
}) => {
  return (
    <div>
      <img src={coverImg} />
      <h1>{title}</h1>
      <span>
        {" "}
        ratings:{rating}/10 runtime:{runtime} minutes
      </span>
      <p>{description}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
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
