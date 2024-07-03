import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import{Form} from "./routes/Form";
import {Home} from "./routes/Home";
import { Result } from "./routes/result";
import {Navbar} from "./routes/Navbar";
import About from "./routes/About";
import { useState } from "react";


function App() {
  const [res, setRes] = useState("");
  return (
    <div className="App" id="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/prediction" element={<Form setRes={setRes}/>}/>
          <Route path="/result" element={<Result res={res} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
