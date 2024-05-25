import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextEditor" about="About US" />
      <div className="container my-3">
      <TextForm heading = "Enter your text to analyze" text="Enter your description here: " />
      </div>
    </>
  );
}
export default App;
