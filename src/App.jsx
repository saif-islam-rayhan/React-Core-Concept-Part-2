
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Frieds';

function App() {
     const handleClick=()=>{
      alert("button clicked");
     }
  const handleClick2=()=>{
    alert("button 2 clicked");
  }


  return (
    <>
     <h3>React Core Concept Part-2</h3>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click2</button>
     <Counter></Counter>
     <Team></Team>
     <Users></Users>
     <Friends></Friends>
    </>
  )
}

export default App
