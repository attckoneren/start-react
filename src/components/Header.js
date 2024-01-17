import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <FontAwesomeIcon icon={faFilm} />
      <h1>
        <Link to={"/"}>My Film</Link>
      </h1>
      <FontAwesomeIcon icon={faFilm} />
    </div>
  );
};

export default Header;
