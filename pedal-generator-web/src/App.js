import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function App() {
  const URL = process.env.REACT_APP_API_HOST;

  // const [count, setCount] = useState(0);
  const [loadVoltage, setLoadVoltage] = useState(0.0);
  const [current, setCurrent] = useState(0.0);

  useEffect(()=> {
    let playAlert = setInterval(getData, 1000);

    return () => {
      clearInterval(playAlert);
    };
  }, []);

  const getData = async() => {
    const response = await axios({
      method: "GET",
      url: URL,
    });
    const {loadVoltage, current} = response.data;

    setLoadVoltage(loadVoltage);
    setCurrent(current);
  };

  return (
    <div className="App">
      <header className="App-header">
        loadVoltage : {loadVoltage}V
        <br />
        <br />
        current : {current}mA
      </header>
    </div>
  );
}

export default App;
