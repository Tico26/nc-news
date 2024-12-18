import { Routes, Route } from "react-router-dom";
import { Articles } from "./components/Article";
import { ArticleDetails } from "./components/ArticleDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ArticleContainer from "./components/ArticleContainer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
