import { useEffect, useState } from "react";
import Movie from "./Movie";

function App(){
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

export default App




// import { func } from "prop-types";
// import { useEffect, useState } from "react";

// function App(){
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [selected, setSelected] = useState({});
//   const [isSelected, setIsSelected] = useState(false);
//   const [value, setValue] = useState(0);

//   const onChange = (event) => {
//     setValue(event.target.value);
//   }
  
//   const onSelect = (event) => {
//     const index = event.target.selectedIndex; //걍 index가 아니라 selectedIndex구낭~~
//     setSelected(coins[index]);
//     setIsSelected(true);
//     console.log(selected);
//   }

//   function Trade(){
//     return(
//       <div>
//         <h3>Trade to {selected.name}</h3>
//         <input 
//           value={value}
//           onChange={onChange}
//           type='number'
//           placeholder='How much money do you have?'
//           />
//           USD
//         <p>You can get</p>
//         <input 
//           value= {value / selected.quotes.USD.price}
//           placeholder={selected.symbol}
//           disabled />
//         {selected.symbol}
//     </div>
//     );
//   }

  

//   useEffect(()=>{
//     fetch('https://api.coinpaprika.com/v1/tickers')
//     .then(response => response.json())
//     .then(json =>{
//       setCoins(json);
//       setLoading(false);
//     })
//   },[])

//   return(
//     <div>
//       <h1>The Coins! {loading? null: `(${coins.length})`}</h1>
//       {loading? <strong>Loading...</strong>: 
//       <select onChange={onSelect}>
//         {coins.map((item) => (
//           <option key={item.id}>{item.name} ({item.symbol}) : ${item.quotes.USD.price} USD</option>
//         ))
//       }
//       </select>}
//       <hr />
      
//         <br />
//         {isSelected? <Trade />: null}
//     </div>
//   );
// }

// export default App





//make to-do
// import { useState } from "react/cjs/react.development";


// function App(){
//   const [toDo,setToDo] = useState('');
//   const [toDos, setToDos] = useState([]);

//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if(toDo ==='')
//     {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo('');
//   }

//   return(
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//          onChange={onChange}
//          value={toDo}
//          type='text'
//          placeholder='Write your to do' />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     </div>
//   );
// }

// export default App