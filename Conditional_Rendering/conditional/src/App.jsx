import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [showbtn, setShowbtn] = useState(true);
  const [todo, setTodo] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey",
      desc: "I am a good todo"
    },
  ]);

  return (
    <>
      <div className="btn">
        {showbtn ? <button onClick={() => setShowbtn(false)}>Click me</button> : "Hum santosh pagal na hai"}
      </div>

      {todo.map((item, index) => (
        <div className="items" key={index}>
          <div>{item.title}</div>
          <div>{item.desc}</div>
        </div>
      ))}
    </>
  );
}

export default App;
