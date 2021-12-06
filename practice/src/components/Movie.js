import propTypes from "prop-types"

function Movie({coverImg, title, summary, genres}){
    return(
        <div>
          <img src={coverImg} alt={title}/>
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (<li key={g}>{g}</li>))}
          </ul>
        </div>
    );
}
export default Movie;

Movie.propTypes = {
    coverImg: propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
};