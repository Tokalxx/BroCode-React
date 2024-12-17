import "./App.css";
import Click_event from "./Components/Click_event";
import Image_Changer from "./Components/Image_Changer";
import OnChange from "./Components/OnChange";
import Update_Function from "./Components/Update_Function";
import Objects from "./Components/Objects";
import Array from "./Components/Array";
import ToDoList from "./Components/ToDoList";
import Digital_Clock from "./Components/Digital_Clock";
import useEffectBC from "./Components/useEffectBC";
import useContextBC from "./Components/useContextBC";
import useRefBC from "./Components/useRefBC";
import Stopwatch from "./Components/Stopwatch";

function App() {
  return (
    <>
      <Click_event />
      <hr className="main_hr" />
      <Image_Changer />
      <hr className="main_hr" />
      <OnChange />
      <hr className="main_hr" />
      <Update_Function />
      <hr className="main_hr" />
      <Objects />
      <hr className="main_hr" />
      <Array />
      <hr className="main_hr" />
      <ToDoList />
      <hr className="main_hr" />
      <useEffectBC />
      <hr className="main_hr" />
      <Digital_Clock />
      <hr className="main_hr" />
      <useContextBC />
      <hr className="main_hr" />
      <useRefBC />
      <hr className="main_hr" />
      <Stopwatch />

      <hr className="main_hr" />
    </>
  );
}

export default App;
