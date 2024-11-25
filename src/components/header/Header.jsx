import './header.css'
import {Link, useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userToken");

        navigate("/login");
    };
    return (
        <header>
            <nav>
                <div>
                    <Link className={"logo"} to="/homepage">Financial House</Link>
                </div>
                <div>
                    <Link className={"transaction-page"} to="/transactions">Transactions</Link>
                    <Link className={"clientpage"} to="/clients">Clients</Link>
                    <Button sx={{ color : '#222222', fontWeight : 'bold', disableHoverListener : true }} className={"logout-button"} onClick={handleLogout}>Log Out</Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
