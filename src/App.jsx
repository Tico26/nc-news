import { Routes, Route } from "react-router-dom";
import { Articles } from "../components/Article";
import { ArticleDetails } from "../components/ArticleDetails";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
}

export default App;
