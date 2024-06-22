// import Button from "react-bootstrap/Button";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsBoard from "./Components/NewsBoard/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
