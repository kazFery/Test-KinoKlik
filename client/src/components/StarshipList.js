import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const PlanteList = () => {
  const [starships, SetStarships] = useState([]);

  const getStarships = () => {
    Axios.get("http://localhost:3001/api/starships/", {})
      .then((response) => {
        console.log(response.results);
        SetStarships(response.data);
      })
      .catch((error) => {
        var fail = document.getElementById("failAlert");
        var failMsg = document.getElementById("failAlertMsg");

        failMsg.innerText = error.response.data;
        fail.style.display = "block";
      });
  };

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <div>
      <h2> Starship List</h2>
      <br />

      {starships?.length ? (
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th> Name</th>
              <th> Model</th>
              <th> Class</th>
              <th> Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {starships.map((s) => (
              <tr>
                <td>{s.name}</td>
                <td>{s.model}</td>
                <td>{s.starship_class}</td>
                <td>{s.manufacturer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p> No people to display </p>
      )}
    </div>
  );
};

export default PlanteList;
