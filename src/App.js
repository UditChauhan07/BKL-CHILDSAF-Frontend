import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/login"
import 'bootstrap/dist/css/bootstrap.css';
import ListPage from './pages/listpage';
import Detail from './pages/detailpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Login />}></Route>         
          <Route path="/list" element={<ListPage />}></Route>
          <Route path="/detail" element={<Detail />}></Route>           
        </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;
