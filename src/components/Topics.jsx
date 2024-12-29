import { useEffect, useState } from "react";
import TopicsCard from "./TopicsCard";
import { getTopics } from "../../api";
import { Loading } from "./Loading";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((response) => {
      setIsLoading(false);
      setTopics(response);
    });
  }, []);
  if (isLoading) return <Loading />;

  return (
    <section id="topic-section">
      <ul id="topics-container">
        {topics.map((topic, index) => {
          return <TopicsCard key={index} topics={topic} />;
        })}
      </ul>
    </section>
  );
};
