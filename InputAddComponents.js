import React from "react";
import "./index.css";

function InputAddComponents({ topics, setTopics }) {

  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log("I am submitted");
    const [ name ] = e.target;

    const newTopic = {
      upvotes: 0,
      downvotes: 0,
      disussedOn: "",
      title: name.value,
      id: Date.now(),
    };

    topics.push(newTopic);
    console.log(newTopic);
    setTopics([...topics]);
    console.log(topics);
  };

  return (
    <div className="input">
      <h3>Add a Topic</h3>
      <div className="label">
        <form onSubmit={handleAddSubmit}>
          <input name="name" placeholder="write your topic idea..."/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default InputAddComponents;
