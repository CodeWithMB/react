import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextEditor" about="About US" />
      <TextForm/>
    </>
  );
}

export default App;
