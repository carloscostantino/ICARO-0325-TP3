import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link> // Added navigation link to Home page
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/recipes" style={{ marginRight: "1rem" }}>Recipes</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
