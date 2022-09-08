import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
  const [people, setPeople] = useState([]);
  const [searchTerm, SetSearchTerm] = useState([""]);
  const [searchedArray, setSearchedArray] = React.useState(people);

  const getPeople = () => {
    Axios.get("http://localhost:3001/api/people", {})
      .then((response) => {
        console.log(response.results);
        setPeople(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getPeople();
  }, [searchTerm]);

  return (
    <div>
      <h2> Search People </h2>
      <br />
      <input
        type="text"
        placeholder="seach for person's name..."
        onChange={(e) => SetSearchTerm(e.target.value)}
      />
      {people
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toString().toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div>
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
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.hair_color}</td>
                    <td>{val.skin_color}</td>
                    <td>{val.gender}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
