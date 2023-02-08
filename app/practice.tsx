"use client";

import { useState } from "react";

export default function Home() {

  const [val, setVal] = useState("hello 1")
  const [val2 , setVal2]= useState("hello 2")

  const onChangeHandler=(e:any)=>
  {
    console.log("e is " , e.target.value);
    setVal(e.target.value);
  }
  const onChangeHandler2=(e:any)=>
  {
    console.log("e is " , e.target.value);
    setVal2(e.target.value);

  }

  return (
    <>
    <input type="text" value={val} onChange={onChangeHandler} />
    <input type="text" value={val2} onChange={onChangeHandler2} />

    <h1>length of Val1 = {val.length}</h1>
    <h1>length of Val2 = {val2.length}</h1>
    </>
  )
}
//////////////////////////////////////


