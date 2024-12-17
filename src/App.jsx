import { Routes, Route } from "react-router-dom";
import { Articles } from "../components/Article";
import { ArticleCard } from "../components/ArticleCard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
