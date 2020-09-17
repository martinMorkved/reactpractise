import React from 'react';
import './App.css';





var today = new Date();
var curHr = today.getHours();
var greeting = "test";
const headingcolor = {color: ""};

if (curHr < 12) {
  greeting = "Good Morning"; 
  headingcolor.color ="red";
} else if (curHr < 18) {
  greeting = "Good Afternoon"
  headingcolor.color ="green";
} else {
  greeting = "Good Evening"
  headingcolor.color ="blue";
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
  <h1 style={headingcolor} className="heading">{greeting}</h1>
 

      </header>
    </div>
  );
}

export default App;
