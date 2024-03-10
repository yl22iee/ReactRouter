import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Video() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    console.log({ text });
  };
  const handleSubmmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`video/${text}`);
  };
  const navigate = useNavigate();
  return (
    <h2>
      Video Store
      <form onSubmit={handleSubmmit}>
        <input
          type="text"
          placeholder="Video ID : "
          value={text}
          onChange={handleChange}
        />
      </form>
    </h2>
  );
}
