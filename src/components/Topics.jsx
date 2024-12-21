import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopicsCard from "./TopicsCard";
import { getTopics } from "../../api";

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);
  return (
    <>
      <ul>
        {topics.map((topic, index) => {
          return <TopicsCard key={index} topics={topic} />;
        })}
      </ul>
    </>
  );
};
