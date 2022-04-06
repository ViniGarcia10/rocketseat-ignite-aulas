import React,{useState} from "react";

export default function Counter() {
const [Counter, setCounter] = useState(0)

  function HandleAdd() {
    setCounter(Counter + 1)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h2>{Counter}</h2>

      <button type="button" onClick={HandleAdd}>
        Increment
      </button>
    </div>
  );
}
