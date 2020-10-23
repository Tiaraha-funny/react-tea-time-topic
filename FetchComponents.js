import React, { useEffect, useState } from "react";
import dislike from "./icons/thumb_down.svg";
import like from "./icons/thumb_up.svg";
import archive from "./icons/archive.svg";
import "./index.css"

const endpoints =
  "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";

function FetchComponents({ newTopic }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      const response = await fetch(endpoints);
      const data = await response.json();
      setTopics(data);
    }
    fetchTopics();
  }, []);

  return (
    <div>
      <div className="section">
        <h3>Next Topics</h3>
        {topics.map((topic) => {
          if (topic.iscussedOn !== "") {
            return (
              <div key={topic.id}  className="article">
                <p>{topic.title}</p>
                <div className="likeBtns">
                  <button>
                    <img src={like} />
                    {topic.upvotes}
                  </button>
                  <button>
                    <img src={dislike} />
                    {topic.downvotes}
                  </button>
                  <button>
                    <img src={archive} />
                  </button>
                </div>
                <div>{newTopic}</div>
              </div>
            );
          }
        })}
      </div>
      <div>
        <h3>Past Topics</h3>
        {topics.map((topic) => {
          if (topic.iscussedOn === "") {
            return (
              <div key={topic.id}>
                <p>{topics.title}</p>
                <div>
                  <button>{topic.upVotes}</button>
                  <button>{topic.downVotes}</button>
                </div>
                <div>{newTopic}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FetchComponents;
