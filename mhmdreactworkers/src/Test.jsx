
import React from "react";
import { useWorker } from "@koale/useworker";
import { useState } from "react";

const numbers = [...Array(5000000)].map(e => ~~(Math.random() * 1000000));
const sortNumbers = nums => nums.sort();

const Test = () => {
  const [sortWorker] = useWorker(sortNumbers);
    const [ui,setUi]=useState(0);
  const runSort = async () => {
    const result = await sortWorker(numbers); // non-blocking UI
    localStorage.setItem('workersss',["2","2","3"]);
    alert(result);
  };

  return (
    <div>

    <button type="button" onClick={runSort}>
      Run Sort
    </button>
    <button type="button" onClick={()=>setUi((state)=>state+1)}>
      UI
    </button>
    <h1>{ui}</h1>
    </div>
  );
};

export default Test;