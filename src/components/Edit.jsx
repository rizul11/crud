import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState(0);
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState(0);

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const navigate = useNavigate;

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://64f1bb350e1e60602d2432de.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-primay p-4 text-center">
            <h3>Update Data</h3>
          </div>
          <form onSubmit={handleUpdate}>
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
              <input type="submit" value="update" className="btn btn-primary" />
            </div>
          </form>

          <br />
        </div>
      </div>
    </>
  );
}

export default Edit;
