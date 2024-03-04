import React, { useState } from "react";
import Events from "./Events";
const StatePassing = () => {
//   var ans = "richa";
//   ans = "amsn";
  const [data, setData] = useState("lovish");
//   const [update , setUpdate] = useState({id :"1" , key :"aman"});
   let [count , setCount] = useState(0);
   let [dec , setDec] = useState(0);
  const handleOnCLick = (data)=>{
    setData("richa");
    setData("lovish doing react");
    setData(data)
  }
  const handleSubmit = ()=>{
    const values = [{
        "id" :"1",
    }, {
        "key" :"1st",
    }]
    // setUpdate(values);

  }
  const handleCount =(data)=>{
    debugger
    if(data === "increment"){
        setCount(count++)
    }
     else if (data ==="decrement"){
        setDec(dec--);
     }
  }
  console.log(count , "cunt data")
  return (
  <>
    <h1> States Passing </h1>
    <div>{data}</div>
    {/* <div onClick={()=>handleOnCLick("data")}>Button</div> */}
    <Events data ={data}/>
    {/* <button onClick={()=>handleCount()}>Count : {count}</button> */}
    <button onClick={()=>handleCount("increment")}>Increment Count : {count}</button>
    {/* <button onClick={()=>handleCount("decrement")}>Decrement Count : {dec}</button> */}

  </>
  );
};

export default StatePassing;
