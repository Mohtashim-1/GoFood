import Login from "./Componenets/Login";
import Home from "./Screen/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js '

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
