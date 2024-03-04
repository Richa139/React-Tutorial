// Events are interactions or occurrences that happen in the browser, such as a user clicking a button or typing in an input field.
// Different Events in React : - onClick , onChange , onSubmit , onKeyDown , onMouseOver , onFocus , onBlur 

// onClick:
// Triggered when a user clicks an element.
// Used for handling mouse clicks.


// onChange:
// Fired when the value of an input element changes.
// Used for handling input changes, like in text fields or form elements.

// onSubmit:
// Triggered when a form is submitted.
// Used for handling form submissions.

// onKeyDown, onKeyUp, and onKeyPress:
// Fired when a user presses, releases, or presses and releases a key, respectively.
// Used for handling keyboard events.

// onMouseOver and onMouseOut:
// Fired when the mouse pointer enters or leaves an element.
// Used for handling mouse hover events.

// onFocus and onBlur:
// Triggered when an element gains or loses focus.
// Used for handling focus-related events.

// Formik and Yup for validation

import React from "react";
const handleOnClick =(tempory)=>{
    console.log("Yes");
    // alert(tempory)
}

const handleOnChange =(e)=>{
    console.log(e.target.value)
}

const handleSubmit =(values)=>{
    console.log(values )
}
const Events = (props)=>{
    console.log(props.data , "data of props in evemts component")
    const data = "aman"
    return (
        <>
          <h1>Events Handling</h1>
          <button onClick={handleOnClick(data)}>Click on Me</button>
          <input onChange={handleOnChange} required/>
          <form >
          <div onSubmit={handleSubmit()}></div>
          </form>
          <div ></div>
        </>
    )
}
export default Events;