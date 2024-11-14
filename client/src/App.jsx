import { useState, useEffect } from "react";

export default function App() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    async function getCakes() {
      const response = await fetch("http://localhost:8080/cakes");
      const data = await response.json();
      setCakes(data);
      console.log(data);
    }
    getCakes();
  }, []);

  return (
    <div>
      <h1>Cakes! Cakes! Cakes!</h1>
      <div className="cakes-container">
        {cake.map((cake) => {
          return (
            <div key={cake.id} className="cakes">
              <h2>{members.username}</h2>
              <p>{types.type_name}</p>
              <p> {cakes.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
