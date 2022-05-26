import UserList from './pages/UserList/UserList';
import UserView from './pages/UserList/UserView';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <UserList />
      <UserView />
    </div>
    </Router>
  );
}

export default App;
