import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import store from "./store";
import setAuthToken from "./utill/setAuthToken";
import { setCurrentUser } from "./actions/authAction";
import Navbar from "./components/general/Navbar";
import ProtectedRoute from "./components/general/protectedRoute";
import Dashboard from "./components/dashboard/index";
import Home from "./components/dashboard/components/Home";
// import 
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/landing";
import "./App.css";
import Addproduct from "./components/dashboard/components/Addproduct";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App(props) {
  useEffect(() => {
    store.dispatch(setCurrentUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                localStorage.token ? (
                  <ProtectedRoute>
                    component={() => <Dashboard {...props} nestedRoute={Home} />}
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/dashboard/addproduct"
              element={
                localStorage.token ? (
                  <ProtectedRoute>
                    component={() => <Dashboard {...props} nestedRoute={Addproduct} />}
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;