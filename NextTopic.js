import React, { useState } from "react";
import dislike from "./icons/thumb_up.svg";
import like from "./icons/thumb_down.svg";
import archive from "./icons/archive.svg";

function NextTopic(props) {
  
  const [count, setCount] = useState(0);
  
  const increament = (id) => {
    console.log("increase it");
    const topicToUpvote = props.topics.find(topic => topic.id === id);
    const countUpVotes = topicToUpvote.upvotes++;
    setCount(countUpVotes);
  }
  const decreament = (id) => {
    console.log("decrease it");
    const topicToDownvote = props.topics.find(topic => topic.id === id);
    const countDownVotes = topicToDownvote.downvotes--;
    setCount(countDownVotes);
  }

  const handleArchive = (id) => {
    const topicToArchive = props.topics.find(topic => topic.id === id);
    topicToArchive.discussedOn = Date.now();
    props.setTopics([...props.topics])
  };

  return (
    <div className="section">
      <div key={props.topic.id} className="article">
        <p>{props.topic.title}</p>
        <div className="likeBtns">
          <button className="like" onClick={() => increament(props.topic.id)}>
            <img src={like} />
          </button>
          <b className="up">{props.topic.upvotes}</b>
          <button className="dislike" onClick={() => decreament(props.topic.id)}>
            <img src={dislike} />
          </button>
          <b className="down">{props.topic.downvotes}</b>
          <button className="archive" onClick={() => handleArchive(props.topic.id)}>
            <img src={archive} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NextTopic;
