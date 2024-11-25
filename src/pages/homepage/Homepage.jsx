import "./homepage.css"
import Header from "../../components/header/Header.jsx";
import {Card, CardActions, CardContent} from "@mui/material";
import reportImage from "../../images/welcome-sign.png";
import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage-main">
      <Header className="homepage-header"/>
        <div className="homepage-content">
            <h1>Welcome to the Dashboard</h1>
            <div>
                <Card sx={{minWidth: 275, boxShadow: 1}}>
                    <CardContent>
                        <img src={reportImage} alt="reportImage"/>
                    </CardContent>

                </Card>
            </div>
            <div className="homepage-routers">
                <Link className="link-homepage" to="/transactions">Transactions</Link>
                <Link className="link-homepage" to="/clients">Clients</Link>
            </div>

        </div>
    </div>
  );
};

export default Homepage;
