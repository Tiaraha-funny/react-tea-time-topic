import React from "react";
import trashIcon from "./icons/trash.svg";

function PastTopic(props) {

  const handleDeleteTopic = (id) => {
    console.log("I want to delete this");
    let filtering = props.topics.filter(topic => topic.id !== id);
    props.setTopics(filtering);
  };

  const discussedOnDate = new Date(Number(props.topic.discussedOn));

  return (
    <div key={props.topic.id} className="article">
      <p>{props.topic.title}</p>
      <div>Discussed on {discussedOnDate.toLocaleDateString()}</div>
      <button className="delete" onClick={() => handleDeleteTopic(props.topic.id)}>
        <img src={trashIcon} />
      </button>
    </div>
  );
}

export default PastTopic;
