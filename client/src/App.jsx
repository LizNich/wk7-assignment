import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";

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
    <BrowserRouter>
      <body>
        <nav>
          <Link to="/">Home</Link> | <Link to="/form">Form Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
        <div>
          <h1>Bake My Day!</h1>
          <h4>
            lorem ipsomfdsafdfsafdsfndksaaf f fdslsk jfklsa fjdsal jfdsksla
            afjkdsla fjskl fdska fskl fjkdsl fjkdssa fjkdsla fjkdsla ajkflsda
            jfksdla fjsla fjkdsla fjdskl fdsjkla fdsjkla fjsdkalf djskalf
            dsjaklf dsjkalf dsjkalf dsjkal fjdkslajfkldsa fdjkslaf jdkls fslkdjf
            l
          </h4>
          <div className="cake-container">
            {cakes.map((cake) => (
              <div key={cake.id} className="cake-item">
                <h3>{cake.username}</h3>
                <h2>{cake.image}</h2>
                <h4>{cake.type_name}</h4>
                <p>
                  <em>{cake.description}</em>
                </p>
              </div>
            ))}
          </div>
        </div>
        <footer>Copyright 2024</footer>
      </body>
    </BrowserRouter>
  );
}
