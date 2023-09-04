import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Read() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://64f1bb350e1e60602d2432de.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64f1bb350e1e60602d2432de.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (window.confirm("Are you sure to delete ?")) {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
