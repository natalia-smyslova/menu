import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu";
import Article from "./components/Article";
import Page404 from "./components/Page404";
import data from './data/data';



export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<Article item={data.Home} />} />
            <Route path="/drift" element={<Article item={data.Drift} />} />
            <Route path="/timeattack" element={<Article item={data.TimeAttack} />} />
            <Route path="/forza"  element={<Article item={data.Forza} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}