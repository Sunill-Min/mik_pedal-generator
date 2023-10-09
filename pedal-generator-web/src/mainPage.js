import './App.css';

import axios from 'axios';
import React, { useEffect, useState } from "react";

import useInterval from './useInterval';

import pedalSymbol from './image/pedal-symbol.png';
import biaisGreenLogo from './image/biais-green-logo.png';
import pedalProductImage from './image/pedalProductImage.png';

const MainPage = () => {
  const URL = process.env.REACT_APP_API_HOST;

  // const [count, setCount] = useState(0);
  const [loadVoltage, setLoadVoltage] = useState(0.0);
  const [current, setCurrent] = useState(0.0);
  const [apiStatus, setApiStatus] = useState(true);

  useInterval(() => {
    getData2();
  }, 1500);

  // useEffect(()=> {
  //   let playAlert = setInterval(() => {
  //     getData();
  //   }, 1000);

  //   return () => {
  //     clearInterval(playAlert);
  //   };
  // }, []);

  const getData2 = async() => {
    const response = await axios({
      method: "GET",
      url: URL,
    });
    console.log(response);
    if (response.status == 200) {
      const {loadVoltage, current} = response.data;

      setLoadVoltage(loadVoltage);
      setCurrent(current);
    }
  };

  const getData = async() => {
    console.log("if-----------------",apiStatus);
    if(apiStatus) {
      setApiStatus((apiStatus) => !apiStatus);
      console.log("false-----------------",apiStatus);
      const response = await axios({
        method: "GET",
        url: URL,
      });
      console.log(response);
      if (response.status == 200) {
        const {loadVoltage, current} = response.data;
  
        setLoadVoltage(loadVoltage);
        setCurrent(current);
      }
      setApiStatus((apiStatus) => !apiStatus);
    }
    else {
      setLoadVoltage(0.0);
      setCurrent(0.0);
    }
  };

  return (
    <React.Fragment className="App">
      <div className="header">
        <div style={{fontSize: "1.6rem"}}>2023 AioT 국제전시회 및 컨퍼런스</div>
        <div className='title'>에너지전환 체험형<br />휴대용 페달발전기</div>
        <div><img src={biaisGreenLogo} alt='BIAIS' style={{width: "60%", float: "right"}}/></div>
      </div>
      <div className='contents'>
        <img src={pedalSymbol} alt="logo" style={{width: "450px"}}/>

        <div className='showPedalData'>
          <div>
            loadVoltage : {loadVoltage}V
          </div>
          <div>    
            current : {current}mA
          </div>
          <div className='description'>   
            (1.5초마다 새로고침합니다.)
          </div>
        </div>
      </div>

        
    </React.Fragment>
  );
}

export default MainPage;
