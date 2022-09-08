import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const PersonList = () => {
  const [people, setPeople] = useState([]);

  const getPeople = () => {
    Axios.get("http://localhost:3001/api/people", {})
      .then((response) => {
        console.log(response.results);
        setPeople(response.data);
      })
      .catch((error) => {
        var fail = document.getElementById("failAlert");
        var failMsg = document.getElementById("failAlertMsg");

        failMsg.innerText = error.response.data;
        fail.style.display = "block";
      });
  };

  
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <h2> People List</h2>
      <br />

      {people?.length ? (
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th> Name</th>
              <th> Hair Color</th>
              <th> Skin Color</th>
              <th> Gender</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr>
                <td>{person.name}</td>
                <td>{person.hair_color}</td>
                <td>{person.skin_color}</td>
                <td>{person.gender}</td>
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

export default PersonList;
