import React from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import ButtonsGroup from "./components/ButtonComponents/ButtonsGroup";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

// initial state
const initState = {
  // the series of clicks
  "clicks" : [
    {
      "type"  : "init",
      "char"  : "0",
      "value" : "0",
    }
  ],
  // the "tokens" constructed from clicks
  "tokens" : [
    {
      "type"  : "number",
      "value" : 0,
    },
  ],
  // the final values
  "values" : [
    0,
  ]
}

const addClick = (setState) => ({ type , char , value }) => {
  setState (
    (oldState) => {
      const clicks = oldState["clicks"]
      clicks.push ({
        "type"  : type,
        "char"  : char,
        "value" : value,
      })
      return ({ "clicks" : clicks })
    }
  );
};

const addToken = (setState) => ({ type , value }) => {
  setState (
    (oldState) => {
      const tokens = oldState["tokens"]
      tokens.push ({
        "type"  : type,
        "value" : value,
      })
      return ({ "tokens" : tokens })
    }
  );
};

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [state , setState] = React.useState (initState);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display value={0}/>
        <ButtonsGroup name="groups">
          <Specials/>
          <Numbers/>
          <Operators/>
        </ButtonsGroup>
      </div>
    </div>
  );
}

export default App;
