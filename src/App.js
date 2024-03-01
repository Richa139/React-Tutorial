import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
// Normal FUnctions

// Time Complexity 
// Space Complexity 
// Break statement  , continue statement 
// Debugging = technique to solve the errors 
// => Syntax error 
// => Logical Error 
// object is consist of key valeu pairs 
var objec ={id :"1" , "name":"aman"};
console.log(objec.id);
function App() {
  let arr = [1, 2, 3];
  var cn = "true";
  console.log(cn , "check type of variable ")
  let string = "aman";
  let n =4;
  console.log(string[4], "nth value")
  let array_OF_String =["richa" , "aman", "rohit"];
  let i=0;
  for(i=0;i<3;i++){
      if(array_OF_String[i]=="aman"){
        console.log("Yes" , i+1 , "index");
        break;
      }
      else if(array_OF_String[i]==="asdasd"){
        continue;
      }
      else{

      }
     
  }
  if(i==4){
    console.log("No");
  }

  var name ="rohit"
  var array =[
    {id :"1" , name :"rohit" , heading:"Yes I am Rohit"},
    { id :"2" , name :"ramna" , heading:"Yes I am Raman"}
  ]
  return (
    <>
      {/* <div className="App">
        <h1>Learn Reacr</h1>
        <div>Hello I am </div>
        <header>sdfsdhjfgsdhjfg</header>
      </div> */}
      {/* <Header></Header> */}
      {/* Props = passing data from parent component to child component  */}

      {/* PropsDrolling  */}
      {array.map((item)=>{
        return (
          <Header data={item}/>
        )
      })}
      {/* {arr.map(() => (
        <Header />
      ))} */}
      {/* {cn === "true" ? (
        <div className="App">
          <h1>Learn Reacr</h1>
          <div>Hello I am </div>
          <header>sdfsdhjfgsdhjfg</header>
        </div>
      ) : (
        "false statement"
      )} */}

      {/* {arr.map((item) => {
        if (item.name === "rohana") {
          <Header />;
        } else {
          <Header />;
        }
      })} */}
    </>
  );
}

// Fat-Arrow Functions
// const App =()=><h1>Hello</h1>

export default App;
