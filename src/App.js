

// import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function onSubmit(e) {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        id='email'
        />
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={e => setPassword}
          />
    </form>
  )

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
