import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  const [teamMember, setTeamMember] = useState([]);
  const addMember = (newMember) => {
    setTeamMember([...teamMember, newMember]);
  };
  console.log(teamMember);
  return (
    <div className="App">
      <Form addMember={addMember} />
      {teamMember.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <h3>{item.email}</h3>
            <p>{item.role}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
