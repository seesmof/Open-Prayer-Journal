"use client";
import { useState } from "react";

const getCurrentTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const timeLabel = () => {
  return <span className="text-slate-200 font-thin">{getCurrentTime()}</span>;
};

export default function Home() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="h-screen mx-auto max-w-3xl p-3">
      <textarea
        name="main_input"
        id="main_input"
        className="resize-none border-none outline-none w-full h-full no-scrollbar"
        onChange={(e) => setInput(e.target.value)}
      >
        {`${timeLabel()}`}
      </textarea>
    </div>
  );
}
