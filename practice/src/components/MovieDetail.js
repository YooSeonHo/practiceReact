

function MovieDetail({title, rating, runtime, coverImg,descript}){
    return(
        <div>
            <img src={coverImg} alt={title} />
            <h1>{title}</h1>
            <h3>Running Time : {runtime}</h3>
            <h3>Rating : {rating}</h3>
            {descript}
        </div>
    );
}

export default MovieDetail;