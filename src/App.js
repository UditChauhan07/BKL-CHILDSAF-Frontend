import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/login"
import 'bootstrap/dist/css/bootstrap.css';
import ListPage from './pages/listpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Login />}></Route>         
          <Route path="/list" element={<ListPage />}></Route>         
        </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;
