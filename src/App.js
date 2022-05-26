import UserList from './pages/UserList/UserList';
import UserView from './pages/UserView/UserView';
import AddUser from './pages/AddUser/AddUser';
import EditUser from './pages/EditUser/EditUser';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<UserList />}></Route>
        <Route exact path="/view" element={<UserView /> }></Route>
        <Route exact path="/add-user" element={<AddUser /> }></Route>
        <Route exact path="/edit/:id" element={<EditUser /> }></Route>
        <Route exact  path="*" element={<PageNotFound /> }></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
