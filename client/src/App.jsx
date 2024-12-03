import Home from "./pages/Home";
import "./app.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HotelsList from "./pages/HotelsList";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminWeb from "./admin/AdminWeb";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotelsList" element={<HotelsList />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminweb" element={<AdminWeb />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;