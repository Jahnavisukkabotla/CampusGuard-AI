import { Link, useNavigate } from "react-router-dom";
import {
    FaShieldAlt,
    FaChartPie,
    FaSearch,
    FaHistory,
    FaSignOutAlt
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (

<nav className="navbar navbar-expand-lg navbar-dark navbar-custom">

<div className="container-fluid">

<Link className="navbar-brand brand" to="/dashboard">
<><FaShieldAlt />
<span>CampusGuard AI</span></>
</Link>

<div className="navbar-nav ms-auto align-items-center">

<Link className="nav-link nav-link-custom" to="/dashboard">
<FaChartPie />
Dashboard
</Link>

<Link className="nav-link nav-link-custom" to="/analyze">
<FaSearch />
Analyze
</Link>

<Link className="nav-link nav-link-custom" to="/history">
<FaHistory />
History
</Link>

<button
className="logout-btn"
onClick={logout}
>

<FaSignOutAlt style={{marginRight:"6px"}}/>

Logout

</button>

</div>

</div>

</nav>

    );
}

export default Navbar;