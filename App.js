import React from "react";
import FetchComponents from "./FetchComponents";
import InputAddComponents from "./InputAddComponents";

function App() {
  return (
    <div className="main">
      <h1>Tea Time Topic</h1>
      <InputAddComponents />
      <FetchComponents />
    </div>
  );
}

export default App;