import { Routes, Route } from "react-router-dom";
import { Articles } from "./components/Article";
import { ArticleDetails } from "./components/ArticleDetails";
import { Topics } from "./components/Topics";
import { Loading } from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { NotFound } from "./components/NotFound";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Welcome />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<Articles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
