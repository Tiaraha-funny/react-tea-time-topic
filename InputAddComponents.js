import React, { useState } from "react";
import "./index.css";

function InputAddComponents({ topics, setTopics }) {

  const [newtopics, setNewTopics] = useState({
    upvotes: 0,
    downvotes: 0,
    disussedOn: "",
    title: name.value,
    id: Date.now(),
  });

  const handleInput = (e) => {
    console.log(e.target.value);
    console.log(name);
    setNewTopics({ ...newtopics, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(newtopics);
    topics.push(newtopics);
    setTopics([...topics, newtopics]);
  };

  return (
    <div className="input">
      <h3>Add a Topic</h3>
      <div className="label">
        <form onSubmit={handleAddSubmit}>
          <input
            name="title"
            onChange={handleInput}
            placeholder="write your topic idea..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default InputAddComponents;
