import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/submit-claim">Submit Claim</Link></li>
        <li><Link to="/insurer">Insurer Panel</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;