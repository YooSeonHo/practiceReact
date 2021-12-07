import propTypes from "prop-types";
import {Link} from 'react-router-dom';
import MovieStyle from '../css/Movie.module.css';

function Movie({id, coverImg, title, summary, genres}){
    return(
        <div className={MovieStyle.box}>
          <img src={coverImg} alt={title} className={MovieStyle.img}/>
          <div>
            <h2 className={MovieStyle.title}>
              <Link to={`/movie/${id}`}  > {title} </Link>
            </h2>
            <p>{summary.length > 130? `${summary.slice(0,130)}...`: summary}</p>
            <ul>
              {genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
          </div>
        </div>
    );
}


Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;