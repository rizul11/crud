import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://64f1bb350e1e60602d2432de.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-primay p-4 text-center">
            <h3>Create Data</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name :</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age :</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Email :</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <br />
            <div className="d-grid">
              <input type="submit" value="submit" className="btn btn-primary" />
            </div>
          </form>
          {name}
          <br />
          {age}
          <br />
          {email}
          <br />
        </div>
      </div>
    </>
  );
}

export default Create;
