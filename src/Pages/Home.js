import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // only need state here
  const [name, setName] = useState("");

  const onChange = (c) => {
    setName(c.target.value);
  };

  let navigate = useNavigate();


  const onClick = (b) => {
    navigate("/App.js")
  }

  return (
    <>
      <div class="input-group mb-3">
    {/* input for name */}
        <input
          type="text"
          class="form-control"
          placeholder="Please enter your Name"
          aria-describedby="basic-addon1"
          onChange={onChange}
        />
      </div>

      {/* start btn */}
      <button 
      type="button" 
      class="btn btn-primary">START
      onClick={onClick}
      </button>


    </>
  );
};

export default Home;
