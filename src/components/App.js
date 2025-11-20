import React from "react";
import Tooltip from "./Tooltip";
// import  "../styles/App.css";

const App = () => {
  return (
    <div>
      <Tooltip text="This is a Tooltip">
         <h1>Hover over me</h1>
      </Tooltip>

      <Tooltip text="This is another Tooltip">
         <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
