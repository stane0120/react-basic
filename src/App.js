import logo from './logo.svg';
import './App.css';
import BtnEventComponent from './components/BtnEventComponent';
import React, { useState } from 'react'; //리액트 내장 모듈에서 useState 객체 import
import KaKaoMap from './components/ClassKaKaoMap';
import { Link } from "react-router-dom"; 

function App() {
  const [state,setState] = useState({count:10});
  const resetEvent = () => { //기존 값 +10 으로 리셋하기
    //state 변경 let count = state.count;
     setState(prevState => ({
     count: prevState.count+10,
     }));
    }
  return (
    <div className="App">
       {/* <KaKaoMap/> */}
{/*       <BtnEventComponent count={state.count} nodeValue={<h1>태그노드</h1>}>
          <h2>김랜더링</h2>
          </BtnEventComponent>
          <button onClick={resetEvent}>{state.count + 10}으로 초기화</button> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>내가 가는 이 길이 어디로 가는지 
           <br/>어디로 날 데려가는지 그 곳은 어딘지</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/classKaKaomap">
          <button id="btnHome">
            클래스형 카카오 맵
          </button>
        </Link>
      </header>
    </div>
  );
}

export default App;
