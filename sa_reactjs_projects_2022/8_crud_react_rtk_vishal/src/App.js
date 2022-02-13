import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./UserPost"; // Here no need to write index.js by default it pick index.js
import CreatePost from "./UserPost/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Note In  react-router-dom 6, switch gets replaces to Routes
// Now in the Route exact not required, also component gets replaced to element
