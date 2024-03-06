import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import  store  from "./store";
//importing general components
import Navbar from "./components/general/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
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
            <Route exact path="/register" Component={Register} />
            <Route exact path="/login" Component={Login}/>
           </Routes>
        </div>
      </Router>
    </Provider>  
  );
};

export default App;