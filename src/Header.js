import React from "react";

function Header (ps){
  console.log(ps.data.id , "props")
  const data = ps.data;
   return (
    <div className="App">
      <h1>Learn React</h1>
      <p>Id :{data.id}</p>
      <div>Hello I am  {data.name}</div>
      <header>{data.heading}</header>
      {/* <ul>
        <li>Milk</li>
        <li>Tead</li>
        <li>Coffee</li>
      </ul> */}
      
    </div>
   )
}
export default Header;