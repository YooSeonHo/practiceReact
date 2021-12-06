import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from './routes/Home'

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;




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