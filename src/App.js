import React from 'react';
import './App.css';
import {incNumber} from "./actions";
import {decNumber} from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const changeNum = useSelector(state => state.changeNum);
  const dispatch = useDispatch();

  return (
    <>
    <div className="main-div">
    

    <div class="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div class="quantity">
      <a class="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
      <input name="quantity" type="text" class="quantity__input" value={changeNum} />
      <a class="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber())}><span>+</span></a>
    </div>

        </div>
      </div>
  </>
  );
}

export default App;
