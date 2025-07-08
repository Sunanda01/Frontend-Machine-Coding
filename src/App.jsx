import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomDrawer from "./views/drawer";


function App() {

  return (
    <>
    <h1>Machine Coding</h1>
      <div>
        <Link to='/drawer'>Drawer</Link>
      </div>
      
      <Routes >
        <Route path="/drawer" element={<CustomDrawer/>}/>
      </Routes>
      
    </>
  );
}

export default App;
