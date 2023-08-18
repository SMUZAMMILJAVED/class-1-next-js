import { useEffect, useState } from "react";
import Button from "@/components/button/Button"
import Greet from "@/components/greet/Greet"
import List from "@/components/list/List"
import { unstable_batchedUpdates } from "react-dom";
export default function Home() {
  
  // const [arr,setArr]=useState(["item 1 ",
  // "item 2 ",
  // "item 3 "]);

  // const addHandler= ()=>{
  //  setArr([...arr,"new item"]);
  //  }
   const [data,setData]=useState(1);
   const update=()=>setData((oldData)=>{
    return oldData+1});
  //  console.log(data);
   useEffect(()=>
   console.log("called")
   ,[])
  return (
    
    <>
    {/* <Greet/>
    <List arr={[arr]}/>
   <Button click={addHandler} text="Add"/> */}
   <div>
  {data}
  <Button text={update}/>
   </div>
    </>
  )
}
