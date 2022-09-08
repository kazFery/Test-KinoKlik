import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const PlanteList = () => {
  const [planets, SetPlanets] = useState([]);

  const getPlanets = () => {
    Axios.get("http://localhost:3001/api/planets/", {})
      .then((response) => {
        console.log(response.results);
        SetPlanets(response.data);
      })
      .catch((error) => {
        var fail = document.getElementById("failAlert");
        var failMsg = document.getElementById("failAlertMsg");

        failMsg.innerText = error.response.data;
        fail.style.display = "block";
      });
  };

  useEffect(() => {
    getPlanets();
    console.log("hello");
  }, []);

  return (
    <div>
      <h2> Planet List</h2>

      <br />

      {planets?.length ? (
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th> Name</th>
              <th> Diameter</th>
              <th> population</th>
              <th> Climate</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr>
                <td>{planet.name}</td>
                <td>{planet.diameter}</td>
                <td>{planet.population}</td>
                <td>{planet.climate}</td>
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
