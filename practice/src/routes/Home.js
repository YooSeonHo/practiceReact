import { useEffect, useState } from "react";
import Movie from '../components/Movie'

function Home(){
    const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMovies = async () => {
    const json = await(
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
      ).json();
    setLoading(false);
    setMovies(json.data.movies);
    //여기에 console.log(movies)를 쓰면 제일 마지막에 나오는데 왜 빈 배열일까? return 앞에 쓰면 객체 차있는 배열로 나옴...ㅠㅠ
  }

  useEffect(()=>{
    // fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    // .then(response => response.json())
    // .then(json=>{
    //   setLoading(false);
    //   setMovies(json.data.movies); fetch->then을 위 async-await을 사용한 getMovies로 바꿔서 사용함 ㅋㅋ\
    getMovies();

    },[]);
  return(
    <div>
      {loading? <h1>Loading...</h1> : (<div>
        {movies.map(movie=> 
          <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary}
            genres={movie.genres}
            />
        )}
        </div>)
        }
    </div>
  );
}

export default Home;