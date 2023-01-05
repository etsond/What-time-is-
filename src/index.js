// import the react and the REactDom lirbary

import React from "react";
import ReactDOM  from "react-dom/client";

// get the reference of the div with the id root
 const element = document.getElementById('root');
// tell react to take control of the element
const root = ReactDOM.createRoot(element);
// create a compoenet
function App(){
  
  
  return <div> <h1> It is, {new Date().toLocaleTimeString()} eastern time. </h1>
  </div>

}
// show the component on the screen 
root.render(<App />)

