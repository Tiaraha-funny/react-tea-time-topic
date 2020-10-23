import React, { useState } from "react";
import "./index.css";

function InputAddComponents() {
  const [newTopic, setNewTopic] = useState("");

  return (
    <form>
      <h3>Add a Topic</h3>
      <div className="label">
        <div className="input">
          <input
            type="text"
            name="text"
            value={newTopic}
            placeholder="write your topic idea here..."
            onChange={(e) => setNewTopic(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default InputAddComponents;
