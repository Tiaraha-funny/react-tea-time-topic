import React, { useEffect, useState } from "react";
import InputAddComponents from "./InputAddComponents";
import NextTopic from "./NextTopic";
import PastTopic from "./PastTopic";
import "./index.css";

const endpoints =
  "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";

function FetchComponents() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      const response = await fetch(endpoints);
      const data = await response.json();
      setTopics(data);
    }
    fetchTopics();
  }, []);

  const sortedByLikes = topics.sort((a, b) => {
    const topicA = a.upvotes - a.downvotes;
    const topicB = b.upvotes - b.downvotes;
    return topicB - topicA;
  });

  return (
    <div>
      <InputAddComponents topics={topics} setTopics={setTopics} />

      <h3>Next Topics</h3>
      {sortedByLikes
        .filter((topic) => topic.discussedOn === "")
        .map((topic) => {
          return (
            <NextTopic
              key={topic.id}
              setTopics={setTopics}
              topics={topics}
              topic={topic}
            />
          );
        })}
      <div>
        <h3>Past Topics</h3>
        {sortedByLikes
          .filter((topic) => topic.discussedOn)
          .map((topic) => {
            return (
              <PastTopic
                key={topic.id}
                topics={topics}
                setTopics={setTopics}
                topic={topic}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FetchComponents;
