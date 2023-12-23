import React from 'react';
import HomeScreen from './screens/HomeScreen'
import './App.css';
import { BrowserRouter as Router, Switch, Route , Routes} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';



function App() {
  const user = {user:"rahul"};

  return (
    <div className="app">
    <Router>
      <Routes>
        {!user ? (
          <Route path="/" element={<LoginScreen />} />
        ) : (
          <Route path="/" element={<HomeScreen />} />
        )}
      </Routes>
    </Router>
  </div>
  );
}

export default App;
