import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => (
  <>
    <div className="navigation">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/login">
          LOGIN
        </Link>
      </div>
    </div>

    <Outlet />
  </>
);

export default Navigation;