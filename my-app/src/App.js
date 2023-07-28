import Navbar from './components/Navbar';
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';



const App = () => {
  return (
    <Router>
    <Navbar/>

      <Routes>
          <Route path= "/" element= { <Home/> } />
          <Route path= "/notes" element= { <Notes /> } />
          <Route path= "/create" element= { <CreateNote /> } />
      </Routes>
      
    </Router>
  );
};

export default App;

