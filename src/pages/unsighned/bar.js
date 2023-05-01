import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Request from './pages/user/request';
import Articles from './pages/article';
import ArticlesList from './pages/articleRating';
//import RatingArticle from "./pages/articleRating/ratingArticle";


import "./App.css"


function App() {
  
  return (
    <div className="App">
      <Router>
          <nav className='main-nav'>
          <NavLink to="/">דף הבית</NavLink>
          <NavLink to="/register">הרשמה</NavLink>
          <NavLink to="/login">כניסה</NavLink>
          <NavLink to="/request">איזור אישי</NavLink>
          <NavLink to="/articles">מאמרים</NavLink>
          <NavLink to="/article">מאמר</NavLink>
          </nav>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/request" element={<Request/>}></Route> 
          <Route path="/articles" element={<Articles/>}></Route> 
          <Route path="/article" element={<ArticlesList/>}></Route> 
          </Routes>
          

      </Router>
    </div>
  );
}

export default App;
