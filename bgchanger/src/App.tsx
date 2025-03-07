import { useState } from "react";

export default function App(){
  const [color, setColor] = useState("black");
  function changeColor(color : string){
    setColor(color);
    window.localStorage.setItem("bgcolor", color);
  }
  return(
    <div style={{ backgroundColor: window.localStorage.getItem("bgcolor") || color }} className="w-screen h-screen flex justify-center items-end p-4">
      <div className="w-auto h-[10vh] flex justify-center items-center text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-2 gap-2 border border-white border-opacity-30">
        <button onClick={() => {changeColor("red")}} className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("blue")}} className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("green")}} className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("pink")}} className="w-8 h-8 bg-pink-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("purple")}} className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("yellow")}} className="w-8 h-8 bg-yellow-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("orange")}} className="w-8 h-8 bg-orange-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("teal")}} className="w-8 h-8 bg-teal-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("indigo")}} className="w-8 h-8 bg-indigo-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("gray")}} className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("cyan")}} className="w-8 h-8 bg-cyan-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("lime")}} className="w-8 h-8 bg-lime-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("#f59e0b")}} className="w-8 h-8 bg-amber-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("#10b981")}} className="w-8 h-8 bg-emerald-500 rounded-full cursor-pointer"></button>
        <button onClick={() => {changeColor("violet")}} className="w-8 h-8 bg-violet-500 rounded-full cursor-pointer"></button>
      </div>
    </div>
  )
}