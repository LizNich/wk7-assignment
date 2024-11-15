import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>This is My Home Page</h2>
      <Link to="/form"></Link>
    </div>
  );
}
