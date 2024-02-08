import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import  store  from "./store";
//importing general components
import Navbar from "./components/general/Navbar";

import background from "./components/landing/background";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Navbar />
           <Routes>
             <Route exact path="/" Component={background} />
           </Routes>
        </div>
      </Router>
    </Provider>  
  );
};

export default App;