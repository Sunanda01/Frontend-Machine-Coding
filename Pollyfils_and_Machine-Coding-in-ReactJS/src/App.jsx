// import "./App.css";
// import CustomAPIFetch from "./views/custom-api-fetch";
// import CustomDrawer from "./views/Machine-Coding-ReactJS/custom-drawer";
// import UseCustomMemo from "./views/custom-use-memo";
// import UseCustomEffect from "./views/custom-useEffect-hook";
import Accordian from "./views/Machine-Coding-ReactJS/Akshay_Saini/Accordian";
import { items } from "./views/Machine-Coding-ReactJS/Akshay_Saini/Accordian/items";

function App() {
  return (
    <>
      {/* <h1>Machine Coding</h1> */}
      {/* <CustomDrawer/>
      <CustomAPIFetch />
      <UseCustomEffect/>
      <UseCustomMemo/> */}
      <Accordian items={items} />
    </>
  );
}

export default App;
