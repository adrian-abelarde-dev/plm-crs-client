import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/test`)
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{data.message}</>;
}

export default App;
