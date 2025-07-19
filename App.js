// import logo from './logo.svg';
// import './App.css';
// import User from './manan';
// import * as sa from "./manan";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// function App({name,age}){
//   return (
//     <>
//     <h1>{name}</h1>
//     <p>{age}</p>
//     </>
//   )
// }
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }



// export default App;

// function App(){
//     let count = 0
//     function Increment(){
//         count++
//         console.log(count)
//     }
//      function Decrement(){
//         count--
//         console.log(count)
//     }
//     return(
//         <>
//         <button onClick={Increment}>+</button>
//         <button onClick={Decrement}>-</button>
//         </>
//     )
// }

// function App(){
//     const fruits = ['apple','banana','mango','cherry','watermelon','muskmelon']
//     return(
//         <>
//         {fruits.map((fruit,index)=>(
//             <li key={index}>{fruit}</li>
//         ))}
//         </>
//     )
// }
// export default App;

import Header from "./header";
import Main,{Spp} from "./main";
import {Qpp} from "./main"
import {Ipp} from "./main"
import {Ypp} from "./main"
import Footer from "./footer";
function App(){
    return(
        <>
    <Header/>
    <Main/>
    <Spp/>
    <Qpp/>  
    <Ipp/>
    <Ypp/>  
    <Footer/>
    </>
    )
}
export default App;