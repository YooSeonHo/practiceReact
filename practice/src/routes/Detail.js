import {useParams} from "react-router-dom"
import { useEffect,useState } from "react";
import { useCallback } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail(){
    const [loading,setLoading] = useState(true);
    const [details,setDetails] = useState({});

    const {id} = useParams();
    const getMovie = useCallback(async() => {
        const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setDetails(json.data.movie);
    },[id]);

    useEffect(()=>{
        getMovie();
    },[getMovie]);

    return(
        <div>
            {loading? <h1>Loading...</h1> : (
                <div>
                    <h1>Detail</h1>
                    <MovieDetail 
                        title={details.title}
                        rating={details.rating}
                        runtime={details.runtime}
                        coverImg={details.large_cover_image}
                        descript={details.description_full}
                    />
                </div>
            ) }
            
        </div>
    );
}

export default Detail;