import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null); // Initialize alert as null, not "null"

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null); // Set alert back to null after 3000 milliseconds
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textfrom heading="Enter the text below to Analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
